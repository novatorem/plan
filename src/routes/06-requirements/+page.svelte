<script lang="ts">
	import content from './content.md?raw';
	import Page from '$lib/Page.svelte';

	const pageDetails = {
		page: '6',
		previousPage: '/05-evaluation',
		nextPage: '/07-personas',
		title: 'Plan | 06 - Requirements',
		markdown: content,
		tldr: 'Better outline what the system needs to accomplish to solve the problem at hand.',
		creation: `- Create a questionnaire, interview, or your preferred data gathering method`
	};
</script>

<Page {...pageDetails} />
