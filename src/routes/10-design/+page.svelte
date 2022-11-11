<script lang="ts">
	import content from './content.md?raw';
	import Page from '$lib/Page.svelte';

	const pageDetails = {
		page: '10',
		previousPage: '/09-experience',
		nextPage: '/11-prototype',
		title: 'Plan | 10 - Design',
		markdown: content,
		tldr: '',
		creation: ``
	};
</script>

<Page {...pageDetails} />
