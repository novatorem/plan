<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import Theme from '$lib/Theme.svelte';
	import Scroll from '$lib/Scroll.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<title>Plan</title>
</svelte:head>

<Theme />
<Scroll />

<Hero />

<div class="flex items-center text-justify justify-center m-12">
	<div class="hero">
		<div class="hero-content text-center w-full block">
			<div class="">
				<h1 class="text-2xl m-4">General structure</h1>
				<ul class="steps m-4">
					<li data-content="🪢" class="step step-neutral">Too long; didn't read</li>
					<li data-content="🧑‍💻" class="step step-neutral">Teachings</li>
					<li data-content="⚙️" class="step step-neutral">Creation of work</li>
					<li data-content="🪙" class="step step-neutral">Sample work</li>
				</ul>
			</div>
			<a class="btn btn-wide mt-6" href="/01-intro">Begin</a>
		</div>
	</div>
</div>

<Footer />

<style>
	.step,
	.steps {
		text-align: left;
	}
</style>
