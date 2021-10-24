<script context="module">
	export const ssr = true;
	export const prerender = true;
	export const hydrate = true;
</script>

<script>
	import Matcher from '../components/Matcher.svelte';
</script>

<section class=" mx-auto px-4 sm:px-6 lg:px-4 pt-24">
	<div class="w-full text-center pb-8">
		<h1 class="font-display font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 pb-4">
			Find the perfect random taco.
		</h1>
		<p class="font-display text-2xl text-gray-500 font-normal">Match different layers to perfection.</p>
	</div>
</section>

<Matcher />
<!-- <code> -->
<!-- {JSON.stringify($tacos)} -->
<!-- </code> -->
