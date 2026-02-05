<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null = null;
	let animationId: number;
	let mouseX = 0;
	let mouseY = 0;
	let arrows: Arrow[] = [];
	let isClient = false;

	interface Arrow {
		x: number;
		y: number;
		baseX: number;
		baseY: number;
	}

	// Configurações
	const GRID_SPACING_X = 40; // Espaçamento horizontal entre setas
	const GRID_SPACING_Y = 40;  // Espaçamento vertical entre setas
	const OFFSET_X = 50;        // Offset inicial em X
	const OFFSET_Y = 50;        // Offset inicial em Y
	const MAX_DISTANCE = 400;
	const MIN_SIZE = 2;
	const MAX_SIZE = 9;
	const ARROW_THRESHOLD = 4;

	function initializeArrows() {
		if (!canvas || !isClient) return;
		arrows = [];
		
		// Calcula quantas setas cabem na tela
		const cols = Math.floor((canvas.width - OFFSET_X) / GRID_SPACING_X);
		const rows = Math.floor((canvas.height - OFFSET_Y) / GRID_SPACING_Y);
		
		// Cria grid de setas
		for (let row = 0; row < rows; row++) {
			for (let col = 0; col < cols; col++) {
				const x = OFFSET_X + col * GRID_SPACING_X;
				const y = OFFSET_Y + row * GRID_SPACING_Y;
				
				arrows.push({
					x: x,
					y: y,
					baseX: x,
					baseY: y
				});
			}
		}
	}

	function drawArrow(x: number, y: number, angle: number, size: number) {
		if (!ctx) return;
		ctx.save();
		ctx.translate(x, y);
		ctx.rotate(angle);
		
		ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
		ctx.beginPath();
		
		const arrowLength = size;
		const arrowWidth = size * 0.6;
		
		// Desenha a seta
		ctx.moveTo(arrowLength, 0);
		ctx.lineTo(arrowLength * 0.3, -arrowWidth / 2);
		ctx.lineTo(arrowLength * 0.3, -arrowWidth / 4);
		ctx.lineTo(-arrowLength * 0.7, -arrowWidth / 4);
		ctx.lineTo(-arrowLength * 0.7, arrowWidth / 4);
		ctx.lineTo(arrowLength * 0.3, arrowWidth / 4);
		ctx.lineTo(arrowLength * 0.3, arrowWidth / 2);
		ctx.closePath();
		
		ctx.fill();
		ctx.restore();
	}

	function drawCircle(x: number, y: number, size: number) {
		if (!ctx) return;
		ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
		ctx.beginPath();
		ctx.arc(x, y, size, 0, Math.PI * 2);
		ctx.fill();
	}

	function animate() {
		if (!ctx || !canvas || !isClient) return;
		
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		arrows.forEach(arrow => {
			const dx = mouseX - arrow.x;
			const dy = mouseY - arrow.y;
			const distance = Math.sqrt(dx * dx + dy * dy);
			
			// Calcula o tamanho baseado na distância
			const normalizedDistance = Math.min(distance / MAX_DISTANCE, 1);
			const size = MAX_SIZE - (normalizedDistance * (MAX_SIZE - MIN_SIZE));
			
            
			if (size > ARROW_THRESHOLD) {
				// Desenha seta apontando para o cursor
				// posso colcoar +180 apra formal uma expiral
				const angle = Math.atan2(dy, dx);
				drawArrow(arrow.x, arrow.y, angle, size);
			} else {
				// Desenha ponto
				drawCircle(arrow.x, arrow.y, MIN_SIZE);
			}
		});

		animationId = requestAnimationFrame(animate);
	}

	function handleMouseMove(event: MouseEvent) {
		if (!canvas) return;
		const rect = canvas.getBoundingClientRect();
		mouseX = event.clientX - rect.left;
		mouseY = event.clientY - rect.top;
	}

	function handleResize() {
		if (!canvas || !isClient) return;
		const width = window.innerWidth;
		const height = window.innerHeight;
		
		canvas.width = width;
		canvas.height = height;
		canvas.style.width = width + 'px';
		canvas.style.height = height + 'px';
		
		initializeArrows();
	}

	onMount(() => {
		isClient = true;
		
		if (canvas) {
			ctx = canvas.getContext('2d');
			
			// Configuração inicial
			const width = window.innerWidth;
			const height = window.innerHeight;
			
			canvas.width = width;
			canvas.height = height;
			canvas.style.width = width + 'px';
			canvas.style.height = height + 'px';
			
			initializeArrows();
			animate();

			// Event listeners
			window.addEventListener('mousemove', handleMouseMove);
			window.addEventListener('resize', handleResize);
		}
	});

	onDestroy(() => {
		if (animationId) {
			cancelAnimationFrame(animationId);
		}
		if (typeof window !== 'undefined') {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('resize', handleResize);
		}
	});
</script>

<canvas
	bind:this={canvas}
	class="fixed top-0 left-0 w-full h-full pointer-events-none"
	style="z-index: -1;"
></canvas>

<style>
	canvas {
		background: transparent;
		width: 100vw !important;
		height: 100vh !important;
	}
</style>