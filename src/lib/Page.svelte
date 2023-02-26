<script lang="ts">
	import { onMount, tick } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';

	import Tldr from '$lib/Tldr.svelte';
	import Quiz from '$lib/Quiz.svelte';
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import DrawerSide from '$lib/DrawerSide.svelte';

	export let tldr: string = '';
	export let quiz: string = '';
	export let title: string = '';
	export let sample: string = '';
	export let markdown: string = '';
	export let creation: string = '';

	export let page: string = '';
	export let previousPage: string = '';
	export let nextPage: string = '';

	onMount(() => {
		setViewHeight();
	});

	let height: number;
	let drawerContent: HTMLElement;

	async function setViewHeight() {
		await tick();
		var currentScroll = drawerContent.scrollTop;
		drawerContent.scrollTop = Number.MAX_SAFE_INTEGER;
		height = drawerContent.scrollTop;
		drawerContent.scrollTop = currentScroll;
	}

	function smoothlyScrollUp() {
		drawerContent.scrollTo({ top: 0, behavior: 'smooth' });
	}

	let strokeOffset = 307.919;
	function indicate() {
		var scrolled = (drawerContent.scrollTop / height) * 100;
		var current = 307.919 - scrolled * 3.07919000001;
		strokeOffset = current < 0 ? 0 : current;
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<svelte:window on:resize={() => setViewHeight()} on:load={() => setViewHeight()} />

<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div bind:this={drawerContent} on:scroll={indicate} class="drawer-content">
		<Navbar />

		<button class="cursor-pointer h-6 w-6 fixed bottom-20 left-4" on:click={smoothlyScrollUp}>
			<svg
				class="progress-circle absolute stroke-base-content fill-none"
				width="100%"
				height="100%"
				viewBox="-1 -1 102 102"
				stroke-width="4"
				style="transition: stroke-dashoffset 10ms linear 0s; stroke-dasharray: 307.919, 307.919; stroke-dashoffset: {strokeOffset};"
			>
				<path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="absolute fill-none stroke-base-content"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke-width="2"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<line x1="12" y1="5" x2="12" y2="19" />
				<line x1="18" y1="11" x2="12" y2="5" />
				<line x1="6" y1="11" x2="12" y2="5" />
			</svg>
		</button>
		<div class="m-12 mt-32 flex items-center text-left justify-center md:text-justify">
			<article class="prose">
				<SvelteMarkdown source={markdown} />
				<div class="divider" />

				{#if tldr}
					<Tldr summary={tldr} />
					<div class="divider" />
				{/if}
				{#if creation}
					<h2 class="mt-0">Creation of work</h2>
					<SvelteMarkdown source={creation} />
					<div class="divider" />
				{/if}
				{#if sample}
					<h2 class="mt-0">Sample</h2>
					<SvelteMarkdown source={sample} />
					<div class="divider" />
				{/if}
				{#if quiz}
					<Quiz quiz={JSON.parse(quiz)} />
					<div class="divider" />
				{/if}
			</article>
		</div>

		<div class="btn-group flex items-center text-justify justify-center mb-12">
			<a class="btn {previousPage == '' ? 'btn-disabled' : ''}" href={previousPage}>«</a>
			<label for="my-drawer" class="btn no-animation">Page {page}</label>
			<a class="btn {nextPage == '' ? 'btn-disabled' : ''}" href={nextPage}>»</a>
		</div>

		<Footer />
	</div>
	<DrawerSide currentPage={parseInt(page)} />
</div>
