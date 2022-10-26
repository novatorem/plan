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
		page: '2',
		previousPage: '/01-intro',
		nextPage: '/03-research'
	};
</script>

<svelte:head>
	<title>Plan | 02 - Users</title>
</svelte:head>

<Scroll />
<Theme />
<Navbar />

<Tldr summary="Define what makes a user and how to quantify their needs and wants." />

<div class="m-12 flex items-center text-justify justify-center">
	<article class="prose">
		<SvelteMarkdown source={markdown} />
		<div class="divider" />

		<h1>Creation of Work</h1>
		<ul>
			<li>Identify the target audience/user group</li>
			<li>Outline problem space, <i>not</i> suspected problems</li>
		</ul>
	</article>
</div>

<Pagination {...pageDetails} />
<Footer />
