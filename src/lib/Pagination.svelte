<script lang="ts">
	export let page: string;
	export let previousPage: string;
	export let nextPage: string;
</script>

<div class="btn-group flex items-center text-justify justify-center mb-12">
	<a class="btn {page == '1' ? 'btn-disabled' : ''}" href={previousPage}>«</a>
	<button class="btn no-animation">Page {page}</button>
	<a class="btn {page == '12' ? 'btn-disabled' : ''}" href={nextPage}>»</a>
</div>
