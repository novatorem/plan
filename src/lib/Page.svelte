<script lang="ts">
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';

	import Theme from '$lib/Theme.svelte';
	import Scroll from '$lib/Scroll.svelte';
	import Tldr from '$lib/Tldr.svelte';
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import DrawerSide from '$lib/DrawerSide.svelte';

	export let tldr: string;
	export let title: string;
	export let markdown: string;
	export let creation: string;

	export let page: string;
	export let previousPage: string;
	export let nextPage: string;

	onMount(() => {
		setViewHeight();
	});

	let height: number;
	let drawercontent: any;
	function parseContentScroll() {
		var scrolled = (drawercontent.scrollTop / height) * 100;
		document.getElementById('progress-bar')!.style.width = scrolled + '%';
	}

	function setViewHeight() {
		var currentScroll = drawercontent.scrollTop;
		drawercontent.scrollTop = Number.MAX_SAFE_INTEGER;
		height = drawercontent.scrollTop;
		drawercontent.scrollTop = currentScroll;
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div bind:this={drawercontent} on:scroll={parseContentScroll} class="drawer-content">
		<Scroll />
		<Theme />
		<Navbar />

		{#if tldr}
			<Tldr summary={tldr} />
		{/if}

		<div class="m-12 flex items-center text-left justify-center md:text-justify">
			<article class="prose">
				<SvelteMarkdown source={markdown} />
				<div class="divider" />

				{#if creation}
					<h2 class="mt-0">Creation of work</h2>
					<SvelteMarkdown source={creation} />
					<div class="divider" />
				{/if}
			</article>
		</div>

		<div class="btn-group flex items-center text-justify justify-center mb-12">
			<a class="btn {previousPage == '' ? 'btn-disabled' : ''}" href={previousPage}>«</a>
			<button class="btn no-animation">Page {page}</button>
			<a class="btn {nextPage == '' ? 'btn-disabled' : ''}" href={nextPage}>»</a>
		</div>

		<Footer />
	</div>
	<DrawerSide />
</div>

<svelte:window on:resize={() => setViewHeight()} />
