<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async () => {
		window.onscroll = function () {
			indicate();
		};
	});

	function indicate() {
		var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		var scrolled = (winScroll / height) * 100;
		document.getElementById('progress-bar')!.style.width = scrolled + '%';
	}
</script>

<div id="progress-bar" />
