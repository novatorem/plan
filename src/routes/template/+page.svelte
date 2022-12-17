<script lang="ts">
	import content from './content.md?raw';
	import sample from './sample.md?raw';
	import questions from './quiz.json?raw';
	import Page from '$lib/Page.svelte';

	const pageDetails = {
		page: '',
		previousPage: '',
		nextPage: '',
		title: '',
		markdown: content,
		sample: sample,
		quiz: questions,
		tldr: '',
		creation: ``
	};
</script>

<Page {...pageDetails} />
