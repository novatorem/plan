<script lang="ts">
	import Question from '$lib/Question.svelte';
	import { fade, fly } from 'svelte/transition';
	import { score } from './store.js';

	export let quiz: any;
	let activeQuestion = 0;

	function nextQuestion() {
		activeQuestion = activeQuestion + 1;
	}

	function reset() {
		activeQuestion = 0;
		score.update((currentValue) => 0);
	}
</script>

<div>
	<h2 class="mt-0">Knowledge Check</h2>

	{#each quiz as question, index}
		{#if index === activeQuestion}
			<Question {question} {nextQuestion} />
		{/if}
	{/each}

	{#if activeQuestion == quiz.length}
		<p>All done, feel free to reset progress if you'd like to try again!</p>
		<button class="btn w-full mb-6" on:click={reset}>Reset</button>
	{/if}

	<div class="divider">Progress</div>

	<div class="flex items-center">
		<div class="stats bg-base-200 shadow mr-12">
			<div class="stat place-items-center">
				<div class="stat-title">Score</div>
				<div class="stat-value">{$score}</div>
			</div>
		</div>

		<progress class="progress progress-primary w-10/12" value={activeQuestion} max={quiz.length} />
	</div>
</div>
