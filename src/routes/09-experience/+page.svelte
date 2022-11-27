<script lang="ts">
	import content from './content.md?raw';
	import Page from '$lib/Page.svelte';

	const pageDetails = {
		page: '9',
		previousPage: '/08-checkpoint',
		nextPage: '/10-design',
		title: 'Plan | 09 - Experience',
		markdown: content,
		tldr: 'Figure out what the experience will be like when interacting with your system.',
		creation: `Create an experience map while keeping the following questions in mind:  
- Who is involved (users/personas)  
- How did they get here  
- What info do they have  
- Happy/frustrated with the system  
- What are they trying to do  
- What are they interacting with`
	};
</script>

<Page {...pageDetails} />
