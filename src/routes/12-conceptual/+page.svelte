<script lang="ts">
	import content from './content.md?raw';
	import Page from '$lib/Page.svelte';

	const pageDetails = {
		page: '12',
		previousPage: '/11-prototype',
		nextPage: '/13-heuristics',
		title: 'Plan | 12 - Conceptual Models',
		markdown: content,
		tldr: '',
		creation: ``
	};
</script>

<Page {...pageDetails} />
