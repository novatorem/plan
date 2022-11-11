<script lang="ts">
	import content from './content.md?raw';
	import Page from '$lib/Page.svelte';

	const pageDetails = {
		page: '5',
		previousPage: '/04-data',
		nextPage: '/06-requirements',
		title: 'Plan | 05 - Evaluation',
		markdown: content,
		tldr: "Try using questionnaires or interviews to gather information from people, while being repectful of people's times.",
		creation: `
- Create an informed consent form  
- Try writing down potential questions`
	};
</script>

<Page {...pageDetails} />
