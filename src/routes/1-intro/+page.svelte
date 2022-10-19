<script lang="ts">
	import Theme from '$lib/Theme.svelte';
	import Scroll from '$lib/Scroll.svelte';
	import Pagination from '$lib/Pagination.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Content from './Content.svelte';
</script>

<svelte:head>
	<title>Plan | 01 - Intro</title>
</svelte:head>

<Scroll />
<Theme />

<Navbar />

<Content />

<Pagination page="1" />
<Footer />
