<script lang="ts">
	import content from './content.md?raw';
	import Page from '$lib/Page.svelte';

	const pageDetails = {
		page: '7',
		previousPage: '/06-requirements',
		nextPage: '/08-checkpoint',
		title: 'Plan | 07 - Personas',
		markdown: content,
		tldr: 'Create personas to represent possible users of the system.',
		creation: `
- Create a list of the possible personas  
- Try to identify their respective scenarios`
	};
</script>

<Page {...pageDetails} />
