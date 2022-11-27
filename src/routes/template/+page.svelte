<script lang="ts">
	import content from './content.md?raw';
	import Page from '$lib/Page.svelte';

	const pageDetails = {
		page: '0',
		previousPage: '',
		nextPage: '/',
		title: 'Plan XXX | YYY',
		markdown: content,
		tldr: '',
		creation: ''
	};
</script>

<Page {...pageDetails} />
