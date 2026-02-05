<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import VectorArrows from "$lib/components/VectorArrows.svelte";
	import "../app.css";

	let { children } = $props();
	let y = $state(0);
	let innerHeight = $state(0);
	let innerWidth = $state(0);

	function goTop() {
		document.body.scrollIntoView();
	}
</script>

<div
	class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm:text-base min-h-screen"
>
	<div
		class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " +
			(y > 0
				? " opacity-100 pointer-events-auto"
				: " pointer-events-none opacity-0")}
	>
		<button
			onclick={goTop}
			class="bg-slate-900 hover:bg-slate-700 text-violet-400 px-3 sm:px-4 cursor-pointer rounded-full shadow-lg transition-colors"
			aria-label="Voltar ao topo"
		>
			<i
				class="fa-solid fa-arrow-up grid place-items-center aspect-square"
			></i>
		</button>
	</div>
	<Header {y} />
	{@render children()}
	<Footer />
	<VectorArrows />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
