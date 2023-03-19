<script lang="ts">
	import Page from '$lib/Page.svelte';
	import content from './content.md?raw';
	import sample from './sample.md?raw';
	import quiz from './quiz.json?raw';

	const pageDetails = {
		page: '5',
		previousPage: '/04-data',
		nextPage: '/06-requirements',
		title: 'Plan | 05 - Evaluation',
		markdown: content,
		sample: sample,
		quiz: quiz,
		tldr: "Try using questionnaires or interviews to gather information from people, while being respectful of people's times.",
		creation: `
- Create an informed consent form  
- Try writing down potential questions`
	};
</script>

<Page {...pageDetails} />
