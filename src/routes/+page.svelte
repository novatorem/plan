<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Theme from '$lib/Theme.svelte';
	import Scroll from '$lib/Scroll.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Plan</title>
</svelte:head>

<Theme />
<Scroll />

<Hero />
<div class="divider mt-0 h-0" />

<a class="btn" href="/1-intro">Start</a>

<Footer />
