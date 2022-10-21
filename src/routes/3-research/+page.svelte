<script lang="ts">
	import Theme from '$lib/Theme.svelte';
	import Scroll from '$lib/Scroll.svelte';
	import Pagination from '$lib/Pagination.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Content from './Content.svelte';

	const pageDetails = {
		page: '3',
		previousPage: '/2-users',
		nextPage: ''
	};
</script>

<svelte:head>
	<title>Plan | 03 - Research</title>
</svelte:head>

<Scroll />
<Theme />
<Navbar />

<Content />

<Pagination {...pageDetails} />
<Footer />
