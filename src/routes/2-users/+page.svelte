<script lang="ts">
	import Theme from '$lib/Theme.svelte';
	import Scroll from '$lib/Scroll.svelte';
	import Pagination from '$lib/Pagination.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Content from './Content.svelte';

	const pageDetails = {
		page: '2',
		previousPage: '/1-intro',
		nextPage: '/3-research'
	};
</script>

<svelte:head>
	<title>Plan | 02 - Users</title>
</svelte:head>

<Scroll />
<Theme />
<Navbar />

<Content />

<Pagination {...pageDetails} />
<Footer />
