<script lang="ts">
	import content from './content.md?raw';
	import Page from '$lib/Page.svelte';

	const pageDetails = {
		page: '3',
		previousPage: '/02-users',
		nextPage: '/04-data',
		title: 'Plan | 03 - Research',
		markdown: content,
		tldr: 'Types or research to keep in mind as you dig deeper into the problem at hand.',
		creation: `
- With the problem space and users in mind, create a research plan`
	};
</script>

<Page {...pageDetails} />
