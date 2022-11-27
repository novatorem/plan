<script lang="ts">
	import content from './content.md?raw';
	import Page from '$lib/Page.svelte';

	const pageDetails = {
		page: '1',
		previousPage: '',
		nextPage: '/02-users',
		title: 'Plan | 01 Intro',
		markdown: content,
		tldr: 'We want to ensure that the user has a satisfying experience, through understanding and iteration.',
		creation: ``
	};
</script>

<Page {...pageDetails} />
