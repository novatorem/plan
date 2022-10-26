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

<div class="flex items-center text-justify justify-center m-12">
	<div class="hero">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<h1 class="text-5xl font-bold">Idea to Plan</h1>
				<p class="py-6">General structure will be:</p>
				<ul class="steps steps-vertical">
					<li data-content="🪢" class="step step-neutral">Too long; didn't read</li>
					<li data-content="🧑‍💻" class="step step-neutral">Learning and definitions</li>
					<li data-content="⚙️" class="step step-neutral">Creation of work</li>
					<li data-content="📖" class="step step-neutral">Extra reading</li>
				</ul>
				<a class="btn flex mt-6" href="/01-intro">Begin</a>
			</div>
		</div>
	</div>
</div>

<Footer />
