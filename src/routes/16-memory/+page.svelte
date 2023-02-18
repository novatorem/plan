<script lang="ts">
	import content from './content.md?raw';
	import Page from '$lib/Page.svelte';

	const pageDetails = {
		page: '16',
		previousPage: '15-attention',
		nextPage: '/finale',
		title: 'Plan | 16 - Memory',
		markdown: content,
		tldr: '',
		creation: ``
	};
</script>

<Page {...pageDetails} />
