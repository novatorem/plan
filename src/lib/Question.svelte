<script lang="ts">
	import { score } from './store.js';

	export let question: any;
	export let nextQuestion: any = null;

	let isCorrect: boolean;
	let isAnswered = false;

	let answers = question.incorrect_answers.map((answer: any) => {
		return {
			answer,
			correct: false
		};
	});
	let allAnswers = [
		...answers,
		{
			answer: question.correct_answer,
			correct: true
		}
	];
	shuffle(allAnswers);
	function shuffle(array: any[]) {
		array.sort(() => Math.random() - 0.5);
	}

	function checkQuestion(correct: boolean, index: number) {
		isAnswered = true;
		isCorrect = correct;
		if (correct) score.update((currentValue) => currentValue + 1);
		var collection = Array.from(document.getElementsByClassName('answer'));
		collection.forEach((element) => {
			element.classList.remove('btn-success');
			element.classList.remove('btn-error');
		});
		var element = collection[index];
		element.classList.add(correct ? 'btn-success' : 'btn-error');
	}
</script>

<h3>
	{@html question.question}
</h3>

{#each allAnswers as answer, index}
	<div class="my-2 justify-left text-justify flex items-center">
		<button
			class="btn btn-outline btn-circle btn-sm answer mx-4"
			on:click={() => checkQuestion(answer.correct, index)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"><polyline points="20 6 9 17 4 12" /></svg
			>
		</button>
		<p>
			{@html answer.answer}
		</p>
	</div>
{/each}

{#if isCorrect}
	<div class="flex justify-evenly text-justify my-12">
		{#if nextQuestion}
			<button class="btn" on:click={nextQuestion}>Next Question</button>
		{/if}
	</div>
{/if}
