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
		page: '3',
		previousPage: '/2-users',
		nextPage: '/4-data'
	};
</script>

<svelte:head>
	<title>Plan | 03 - Research</title>
</svelte:head>

<Scroll />
<Theme />
<Navbar />

<Tldr summary="Types or research to keep in mind as you dig deeper into the problem at hand." />

<div class="m-12 flex items-center text-justify justify-center">
	<article class="prose">
		<SvelteMarkdown source={markdown} />
		<div class="divider" />

		<h1>Creation of Work</h1>
		<ul>
			<li>With the problem space and users in mind, create a research plan</li>
		</ul>
	</article>
</div>


<Pagination {...pageDetails} />
<Footer />
