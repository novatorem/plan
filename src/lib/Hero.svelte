<script lang="ts">
	import { onMount } from 'svelte';

	let plans = ['app', 'website'];
	let vowels = ['n', ''];

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
	<div
		class="flex items-end md:items-center text-left justify-center h-screen p-12 p-12 md:w-6/12 w-full z-100"
	>
		<div class="inline-table">
			<h1 class="text-5xl font-bold inline leading-normal mde:text-justify mb-0 mr-0 pr-0">
				Idea for a{vowels[tick]}&nbsp;
			</h1>
			<h1
				class="text-5xl font-bold inline bg-gradient-to-r bg-clip-text leading-normal text-transparent from-[#048eaa] via-blue-500 to-[#048eaa] animate-text ml-0 pl-0 tracking-normal"
			>
				{plans[tick]}
			</h1>
			<h1 class="text-5xl font-bold block md:text-justify leading-normal mb-0">
				Turned into a plan
			</h1>
		</div>
		<div />
	</div>
	<div class="divider mt-0 h-0" />
</div>
