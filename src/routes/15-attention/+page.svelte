<script lang="ts">
	import content from './content.md?raw';
	import Page from '$lib/Page.svelte';

	const pageDetails = {
		page: '15',
		previousPage: '/14-perception',
		nextPage: '/16-memory',
		title: 'Plan | Attention',
		markdown: content,
		tldr: '',
		creation: ``
	};
</script>

<Page {...pageDetails} />
