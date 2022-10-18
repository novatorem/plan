<script lang="ts">
	import { onMount } from 'svelte';

	let plans = ['app', 'website', 'business', 'program'];
	let vowels = ['n', '', '', ''];

	let tick = 0;
	setInterval(() => {
		if (tick > plans.length - 2) tick = 0;
		else tick += 1;
	}, 5000);

	onMount(async () => {
		// @ts-ignore
		VANTA.GLOBE({
			el: '#hero',
			mouseControls: true,
			touchControls: true,
			gyroControls: false,
			minHeight: 200.0,
			minWidth: 200.0,
			scale: 1.0,
			scaleMobile: 1.0,
			color: 0x3fc6ff,
			color2: 0x828282,
			backgroundAlpha: 0
		});
	});
</script>

<div id="hero" class="h-screen">
	<div class="flex items-center text-left justify-center h-screen pl-12 pr-12 md:w-6/12 w-full">
		<div class="items-center text-left justify-center">
			<h1 class="text-5xl font-bold inline leading-normal text-justify mb-0">
				An idea for a{vowels[tick]}&nbsp;
			</h1>
			<h1
				class="text-5xl font-bold inline bg-gradient-to-r bg-clip-text leading-normal text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text"
			>
				{plans[tick]}
			</h1>
			<h1 class="text-5xl font-bold block text-justify leading-normal mb-0">
				How can it be turned into a plan?
			</h1>
		</div>
		<div />
	</div>
</div>

<svelte:head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js"></script>
</svelte:head>
