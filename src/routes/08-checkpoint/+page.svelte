<script lang="ts">
	import content from './content.md?raw';
	import Page from '$lib/Page.svelte';

	const pageDetails = {
		page: '8',
		previousPage: '/07-personas',
		nextPage: '/09-experience',
		title: '',
		markdown: content,
		tldr: '',
		creation: ``
	};
</script>

<Page {...pageDetails} />
