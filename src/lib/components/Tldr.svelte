<script lang="ts">
	export let summary: string;
</script>

<div class="flex justify-center mx-12">
	<article class="prose">
		<details>
			<summary class="btn flex items-center justify-center mt-12 text-justify"
				>Too long; didn't read</summary
			>

			<p class="flex justify-center px-4 py-4 bg-base-200 rounded-md">
				{summary}
			</p>
			<div class="divider mb-0" />
		</details>
	</article>
</div>
