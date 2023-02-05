<script lang="ts">
	import content from './content.md?raw';
	import Page from '$lib/Page.svelte';

	const pageDetails = {
		page: '14',
		previousPage: '13-heuristics',
		nextPage: '/finale',
		title: 'Plan | 14 - Perception, Attention, Memory',
		markdown: content,
		tldr: '',
		creation: ``
	};
</script>

<Page {...pageDetails} />
