<script lang="ts">
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';

	import Tldr from '$lib/Tldr.svelte';
	import Quiz from '$lib/Quiz.svelte';
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import DrawerSide from '$lib/DrawerSide.svelte';

	export let tldr: string;
	export let quiz: string;
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
	let drawerContent: any;
	function parseContentScroll() {
		var scrolled = (drawerContent.scrollTop / height) * 100;
		document.getElementById('progress-bar')!.style.width = scrolled + '%';
	}

	function setViewHeight() {
		var currentScroll = drawerContent.scrollTop;
		drawerContent.scrollTop = Number.MAX_SAFE_INTEGER;
		height = drawerContent.scrollTop;
		drawerContent.scrollTop = currentScroll;
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div bind:this={drawerContent} on:scroll={parseContentScroll} class="drawer-content">
		<Navbar />

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
				{#if quiz}
					<Quiz quiz={JSON.parse(quiz)} />
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

<svelte:window on:resize={() => setViewHeight()} on:load={() => setViewHeight()} />
