<script lang="ts">
	export let summary: string;
</script>

<div class="flex justify-center my-12">
	<article class="prose">
		<details>
			<summary class="btn flex items-center justify-center text-justify"
				>Too long; didn't read</summary
			>

			<p class="flex justify-center p-4 bg-base-200 rounded-md m-0 mt-2">
				{summary}
			</p>
		</details>
	</article>
</div>
