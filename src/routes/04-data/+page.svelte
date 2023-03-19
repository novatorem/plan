<script lang="ts">
	import Page from '$lib/Page.svelte';
	import content from './content.md?raw';
	import sample from './sample.md?raw';
	import quiz from './quiz.json?raw';

	const pageDetails = {
		page: '4',
		previousPage: '/03-research',
		nextPage: '/05-evaluation',
		title: 'Plan | 04 - Data',
		markdown: content,
		sample: sample,
		quiz: quiz,
		tldr: 'Data is essential for designing user-friendly and effective products or services. However, data collection requires careful planning and ethical considerations.',
		creation: ``
	};
</script>

<Page {...pageDetails} />
