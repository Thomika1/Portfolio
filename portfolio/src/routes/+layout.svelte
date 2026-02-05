<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import VectorArrows from '$lib/components/VectorArrows.svelte';
	import "../app.css";
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<VectorArrows />
{@render children()}
