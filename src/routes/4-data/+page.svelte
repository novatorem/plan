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
		page: '4',
		previousPage: '/3-research',
		nextPage: ''
	};
</script>

<svelte:head>
	<title>Plan | 04 - Data</title>
</svelte:head>

<Scroll />
<Theme />
<Navbar />

<Tldr
	summary="While gathering data to identify problems and users, we need to ensure that the correct information is retrieved and all participants are comfortable throughout."
/>

<div class="m-12 flex items-center text-justify justify-center">
	<article class="prose">
		<SvelteMarkdown source={markdown} />
		<div class="divider" />

		<!-- <h1>Creation of Work</h1>
		<ul>
			<li></li>
		</ul> -->
	</article>
</div>

<Pagination {...pageDetails} />
<Footer />
