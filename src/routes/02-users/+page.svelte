<script lang="ts">
	import content from './content.md?raw';
	import questions from './quiz.json?raw';
	import Page from '$lib/Page.svelte';

	const pageDetails = {
		page: '2',
		previousPage: '/01-intro',
		nextPage: '/03-research',
		title: 'Plan | 02 - Users',
		markdown: content,
		sample: `Canadians in the province of Ontario are going to be the target audience.`,
		quiz: questions,
		tldr: 'Define what makes a user and how to quantify their needs and wants.',
		creation: `
- Identify the target audience/user group  
- Outline problem space, _not_ suspected problems`
	};
</script>

<Page {...pageDetails} />
