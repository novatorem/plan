<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import Theme from '$lib/Theme.svelte';
	import Scroll from '$lib/Scroll.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<title>Plan</title>
</svelte:head>

<Theme />
<Scroll />

<Hero />

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row">
		<img
			src="https://images.unsplash.com/photo-1516546453174-5e1098a4b4af"
			class="max-w-sm rounded-lg shadow-2xl"
			alt="Person writing in a journal"
		/>
		<div class="ml-6">
			<h1 class="text-5xl font-bold">Got an idea?</h1>
			<p class="py-6">...</p>
		</div>
	</div>
</div>

<div class="hero min-h-screen bg-base-300">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<img
			src="https://images.unsplash.com/photo-1589586502913-822aa129d420"
			class="max-w-sm rounded-lg shadow-2xl"
			alt="3D model of a cityscape"
		/>
		<div class="mr-6">
			<h1 class="text-5xl font-bold">Turn it into a plan!</h1>
			<p class="py-6">...</p>
		</div>
	</div>
</div>

<div class="flex items-center text-justify justify-center p-12 bg-base-200 min-h-screen">
	<div class="flex flex-col w-full">
		<div class="w-full">
			<div class="hero">
				<div class="hero-content md:text-center w-full block">
					<h1 class="text-3xl">General structure</h1>
					<ul class="steps steps-vertical md:m-12 md:steps-horizontal">
						<li data-content="" class="step step-neutral step-icon-teaching">Teachings</li>
						<li data-content="" class="step step-neutral step-icon-tldr">Too long; didn't read</li>
						<li data-content="" class="step step-neutral step-icon-knowledge">Knowledge check</li>
						<li data-content="" class="step step-neutral step-icon-creation">Creation of work</li>
						<li data-content="" class="step step-neutral step-icon-sample">Sample work</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="divider w-1/2 self-center" />
		<div class="overflow-x-auto items-center w-full mt-12">
			<table class="table table-zebra mx-auto my-0">
				<tbody>
					<tr>
						<td>Teachings</td>
						<td>An educational text that outlines what we aim to learn and understand</td>
					</tr>
					<tr>
						<td>TL;DR</td>
						<td>Short form summary of the above for those not interested in the full format</td>
					</tr>
					<tr>
						<td>Knowledge Check</td>
						<td>Quick and optional quiz for you to grasp your understanding</td>
					</tr>
					<tr>
						<td>Creation</td>
						<td>The tasks to accomplish before moving forward onto the next section</td>
					</tr>
					<tr>
						<td>Sample</td>
						<td>An example completed task to provide a reference point</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>

<div class="hero min-h-screen bg-base-300">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Structure your thoughts</h1>
			<p class="py-6">
				Ready to give it a shot? If you ever feel overwhelmed, remember that you can skim, stick to
				the tl;drs, or complete this over a period of time. The completion of this program can take
				approximately four month, so it's always fair to peruse at your leisure.
			</p>

			<a class="btn btn-wide mt-6 btn-primary" href="/01-intro">Begin</a>
		</div>
	</div>
</div>

<Footer />

<style>
	.step,
	.steps {
		text-align: left !important;
	}

	.step-icon-teaching:after,
	.step-icon-tldr:after,
	.step-icon-knowledge:after,
	.step-icon-creation:after,
	.step-icon-sample:after {
		background-repeat: no-repeat;
		background-position: center;
	}

	.step-icon-teaching:after {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23a6adba' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 6 4 14'%3E%3C/path%3E%3Cpath d='M12 6v14'%3E%3C/path%3E%3Cpath d='M8 8v12'%3E%3C/path%3E%3Cpath d='M4 4v16'%3E%3C/path%3E%3C/svg%3E");
	}

	.step-icon-tldr:after {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23a6adba' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z'%3E%3C/path%3E%3Cpath d='M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97'%3E%3C/path%3E%3C/svg%3E");
	}

	.step-icon-knowledge:after {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23a6adba' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z'%3E%3C/path%3E%3Cpath d='m7 16.5-4.74-2.85'%3E%3C/path%3E%3Cpath d='m7 16.5 5-3'%3E%3C/path%3E%3Cpath d='M7 16.5v5.17'%3E%3C/path%3E%3Cpath d='M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z'%3E%3C/path%3E%3Cpath d='m17 16.5-5-3'%3E%3C/path%3E%3Cpath d='m17 16.5 4.74-2.85'%3E%3C/path%3E%3Cpath d='M17 16.5v5.17'%3E%3C/path%3E%3Cpath d='M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z'%3E%3C/path%3E%3Cpath d='M12 8 7.26 5.15'%3E%3C/path%3E%3Cpath d='m12 8 4.74-2.85'%3E%3C/path%3E%3Cpath d='M12 13.5V8'%3E%3C/path%3E%3C/svg%3E");
	}

	.step-icon-creation:after {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23a6adba' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='10' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='10' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='10' y1='18' x2='21' y2='18'%3E%3C/line%3E%3Cpolyline points='3 6 4 7 6 5'%3E%3C/polyline%3E%3Cpolyline points='3 12 4 13 6 11'%3E%3C/polyline%3E%3Cpolyline points='3 18 4 19 6 17'%3E%3C/polyline%3E%3C/svg%3E");
	}

	.step-icon-sample:after {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23a6adba' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 10v6M2 10l10-5 10 5-10 5z'%3E%3C/path%3E%3Cpath d='M6 12v5c3 3 9 3 12 0v-5'%3E%3C/path%3E%3C/svg%3E");
	}
</style>
