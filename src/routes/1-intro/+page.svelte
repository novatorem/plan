<script lang="ts">
	import Theme from '$lib/Theme.svelte';
	import Scroll from '$lib/Scroll.svelte';
	import Pagination from '$lib/Pagination.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Tldr from '$lib/components/Tldr.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import markdown from './content.md?raw';

	const pageDetails = {
		page: '1',
		previousPage: '',
		nextPage: '/2-users'
	};
</script>

<svelte:head>
	<title>Plan | 01 - Intro</title>
</svelte:head>

<Scroll />
<Theme />
<Navbar />

<Tldr
	summary="We want to ensure that the user has a satisfying experience, through understanding and iteration."
/>

<div class="m-12 flex items-center text-justify justify-center">
	<article class="prose">
		<SvelteMarkdown source={markdown} />
		<div class="divider mb-0" />
	</article>
</div>

<Pagination {...pageDetails} />
<Footer />
