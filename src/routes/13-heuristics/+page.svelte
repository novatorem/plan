<script lang="ts">
	import content from './content.md?raw';
	import Page from '$lib/Page.svelte';

	const pageDetails = {
		page: '13',
		previousPage: '/12-conceptual',
		nextPage: '/14-pam',
		title: 'Plan | 13 - Heuristics',
		markdown: content,
		tldr: '',
		creation: ``
	};
</script>

<Page {...pageDetails} />
