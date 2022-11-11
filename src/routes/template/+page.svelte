<script lang="ts">
	import content from './content.md?raw';
	import Page from '$lib/Page.svelte';

	const pageDetails = {
		page: '',
		previousPage: '',
		nextPage: '',
		title: '',
		markdown: content,
		tldr: '',
		creation: ``
	};
</script>

<Page {...pageDetails} />
