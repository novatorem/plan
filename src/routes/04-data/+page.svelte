<script lang="ts">
	import content from './content.md?raw';
	import Page from '$lib/Page.svelte';

	const pageDetails = {
		page: '4',
		previousPage: '/03-research',
		nextPage: '/05-evaluation',
		title: 'Plan | 04 - Data',
		markdown: content,
		tldr: 'While gathering data to identify problems and users, we need to ensure that the correct information is retrieved and all participants are comfortable throughout.',
		creation: ``
	};
</script>

<Page {...pageDetails} />
