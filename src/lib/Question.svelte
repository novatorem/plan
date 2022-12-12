<script lang="ts">
	import { score } from './store.js';

	export let question: any;
	export let nextQuestion: any;

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
	<button
		class="btn btn-outline my-6 justify-center text-justify block answer"
		on:click={() => checkQuestion(answer.correct, index)}
	>
		{@html answer.answer}
	</button>
{/each}

{#if isCorrect}
	<div class="flex justify-evenly text-justify my-12">
		{#if nextQuestion}
			<button class="btn" on:click={nextQuestion}>Next Question</button>
		{/if}
	</div>
{/if}
