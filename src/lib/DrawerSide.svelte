<script lang="ts">
	import { onMount } from 'svelte';

	export let currentPage: number;

	onMount(async () => {
		var pages = document.querySelectorAll('.drawer-pages li');
		var page = pages[currentPage - 1];
		page.classList.add('bg-base-200');
	});
</script>

<div class="drawer-side">
	<label for="my-drawer" class="drawer-overlay" />
	<div class="drawer-pages w-80">
		<ul class="menu p-4 bg-base-100 text-base-content h-full">
			<li><a href="/01-intro">01 | Intro</a></li>
			<li><a href="/02-users">02 | Users</a></li>
			<li><a href="/03-research">03 | Research</a></li>
			<li><a href="/04-data">04 | Data</a></li>
			<li><a href="/05-evaluation">05 | Evaluation</a></li>
			<li><a href="/06-requirements">06 | Requirements</a></li>
			<li><a href="/07-personas">07 | Personas</a></li>
			<li><a href="/08-checkpoint">08 | Checkpoint</a></li>
			<li><a href="/09-experience">09 | Experience</a></li>
			<li><a href="/10-design">10 | Design</a></li>
			<li><a href="/11-prototype">11 | Prototype</a></li>
			<li><a href="/12-conceptual">12 | Conceptual Design</a></li>
			<li><a href="/13-heuristics">13 | Heuristics</a></li>
			<li><a href="/14-perception">14 | Perception</a></li>
			<li><a href="/15-attention">15 | Attention</a></li>
			<li><a href="/16-memory">16 | Memory</a></li>
		</ul>
	</div>
</div>

<style>
	li {
		border-radius: 5px;
	}
</style>
