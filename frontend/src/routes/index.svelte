<script context="module">
	export const ssr = true;
	export const prerender = true;
	export const hydrate = true;
</script>

<script>
	import Matcher from '../components/Matcher.svelte';
	import { onMount } from 'svelte';
	import ActionButton from '../components/ActionButton.svelte';
</script>

<div class="px-4 py-16">
	<div class="relative w-full md:max-w-8xl md:mx-auto text-center">
		<h1 class="font-bold text-gray-700 text-2xl sm:text-4xl md:text-6xl leading-tight mb-8">
			A new taco inspiration experience.
		</h1>

		<p class="text-gray-600 md:text-xl md:px-18 capitalize">per aspera ad taco</p>

		<ActionButton href="/magazine" style="px-4">Read magazine</ActionButton>

		<p class="text-gray-600 italic pt-8 small">
			Source code: <a href="https://github.com/mdeheij/tacofancy">github.com/mdeheij/tacoservice</a>
		</p>
		<p class="text-gray-600 italic small">
			Content: <a href="https://github.com/mdeheij/tacofancy">mdeheij/tacofancy</a>
		</p>
		<p class="text-gray-600 italic small">
			Forked from / made by <a href="https://github.com/sinker/tacofancy">sinker/tacofancy</a> and <a href="https://github.com/mdeheij/tacofancy/commits/master">many others</a>
		</p>

		<div
			class="hidden md:block h-40 w-40 rounded-full bg-blue-200 absolute left-0 bottom-0 -mb-64 -ml-32"
		/>

		<img
			class="hidden rotate-12 md:block h-48 w-48 p-8 rounded-full bg-blue-200 absolute left-0 bottom-0 -mb-64 -ml-32"
			alt="Cilantro icon"
			src="/mixin.svg"
		/>
		<img
			class="hidden md:block h-52 w-52 p-4 rounded-full bg-red-200 absolute right-0 bottom-0 -mb-36 -mr-28"
			alt="Full taco icon"
			src="/full_taco.svg"
		/>

		<div
			class="hidden md:block h-10 w-10 rounded-full bg-yellow-200 absolute top-0 right-0 -mr-40 mt-32"
		/>
	</div>
</div>
<!-- <Matcher /> -->

<style global>
	body {
		overflow-x: hidden;
	}
</style>
