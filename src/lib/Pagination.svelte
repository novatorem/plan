<script lang="ts">
	export let page: string;
</script>

<div class="btn-group flex items-center text-justify justify-center mb-12">
	<button class="btn {page == '1' ? 'btn-disabled' : ''}">«</button>
	<button class="btn no-animation">Page {page}</button>
	<button class="btn {page == '12' ? 'btn-disabled' : ''}">»</button>
</div>
