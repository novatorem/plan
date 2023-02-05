<script lang="ts">
	import Theme from '$lib/Theme.svelte';
	import Scroll from '$lib/Scroll.svelte';
	import Footer from '$lib/Footer.svelte';
	import { Confetti } from 'svelte-confetti';
</script>

<svelte:head>
	<title>Plan | The Finale</title>
</svelte:head>

<Theme />
<Scroll />

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<a href="/" class="btn btn-ghost normal-case text-xl">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="mr-3"
				><line x1="9" y1="18" x2="15" y2="18" /><line x1="10" y1="22" x2="14" y2="22" /><path
					d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"
				/></svg
			>
			Plan</a
		>
	</div>
</div>

<div
	class="fixed left-0 h-screen w-screen flex justify-center overflow-hidden pointer-events-none"
	style="top: -50px"
>
	<Confetti
		x={[-5, 5]}
		y={[0, 0.1]}
		delay={[500, 2000]}
		infinite
		duration={5000}
		amount={10}
		fallDistance="100vh"
	/>
</div>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-justify">
		<div class="w-xl">
			<h1 class="text-3xl text-center">The Finale</h1>
			<p class="py-6 text-xl">
				Congratulations on reaching the end of this website! It's great that you have taken the time
				to go through our resources and information on turning your idea into a solid plan. Starting
				a new venture can be challenging, but with the knowledge you have gained here, you are well
				prepared to face any obstacles.
			</p>
			<p class="py-6 text-xl">
				The information provided here was meant to help clarify the process of turning an idea into
				a plan and to give you the confidence to turn your vision into reality. While the journey
				may not be easy, determination, hard work, and a well-structured plan can help you overcome
				any challenges.
			</p>
			<p class="py-6 text-xl">
				We would like to thank you for visiting our website and using it as a resource. If you have
				any questions or concerns, don't hesitate to reach out. We are here to help and support you
				in any way we can.
			</p>
			<p class="py-6 text-xl">
				As you continue on your journey, keep your goals in focus, continue to learn and grow, and
				never give up on your dreams. Every successful venture starts with a single idea, and you
				have what it takes to make yours a reality.
			</p>
			<p class="py-6 text-xl">
				Congratulations again on reaching the end of this website and best of luck in your
				endeavors!
			</p>
		</div>
	</div>
</div>

<Footer />
