<script lang="ts">
	import { onMount } from 'svelte';
	import markdown from './content.md?raw';
	import SvelteMarkdown from 'svelte-markdown';

	import Theme from '$lib/Theme.svelte';
	import Scroll from '$lib/Scroll.svelte';
	import Tldr from '$lib/components/Tldr.svelte';
	import Pagination from '$lib/Pagination.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import DrawerSide from '$lib/components/DrawerSide.svelte';

	let height: number;
	let drawercontent: any;

	onMount(() => {
		setViewHeight();
	});

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

	const pageDetails = {
		page: '9',
		previousPage: '/08-checkpoint',
		nextPage: '/'
	};
</script>

<svelte:head>
	<title>Plan | 09 - Experience</title>
</svelte:head>

<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div bind:this={drawercontent} on:scroll={parseContentScroll} class="drawer-content">
		<Scroll />
		<Theme />
		<Navbar />

		<Tldr summary="" />

		<div class="m-12 flex items-center text-left justify-center md:text-justify">
			<article class="prose">
				<SvelteMarkdown source={markdown} />
				<div class="divider" />

				<h2 class="mt-0">Creation of work</h2>
				<ul>
					<li />
				</ul>
				<div class="divider" />
			</article>
		</div>

		<Pagination {...pageDetails} />
		<Footer />
	</div>
	<DrawerSide />
</div>

<svelte:window on:resize={() => setViewHeight()} />
