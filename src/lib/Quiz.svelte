<script lang="ts">
	import Question from '$lib/Question.svelte';
	import { onMount } from 'svelte';
	import { score } from './store.js';

	onMount(() => {
		score.set(0);
	});

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

	<div class="divider">
		Score: {$score}
	</div>

	<div class="flex items-center">
		<progress class="progress progress-primary w-full" value={$score} max={quiz.length} />
	</div>
</div>
