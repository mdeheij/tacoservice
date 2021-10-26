<script context="module">
	export const prerender = true;
	export const ssr = true;
</script>

<script lang="ts">
	import MarkdownIt from 'markdown-it';
	import { onMount } from 'svelte';
	import ActionButton from '../components/ActionButton.svelte';
	import type TacoRecipe from '../model/TacoRecipe';
	import tacoStore from '../stores/TacoStore';
	let md = new MarkdownIt();

	const tacos = tacoStore.elements;

	function summary(taco: TacoRecipe) {
		return md.render(taco.summary());
	}

	onMount(async () => {
		tacoStore.init();
	});
</script>

{#if $tacos && $tacos.length > 3}
	<div class="flex flex-col sm:flex-row max-w-8xl mx-auto">
		<div class="flex flex-col sm:w-2/3 sm:border-r border-gray-300">
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
				<div
					class="p-5 text-left sm:border-r border-gray-300 sm:row-span-2 sm:col-span-2 flex flex-col"
				>
					<p class="text-red-600 uppercase font-semibold font-display text-xs tracking-widest my-3">
						{$tacos[0].getTag()}
					</p>
					<a class="font-serif text-4xl capitalize pb-4" href={'/' + $tacos[0].filename}
						>{$tacos[0].name}</a
					>

					<p class="font-serif text-gray-600 text-sm leading-snug summary summary">
						{@html summary($tacos[0])}
					</p>

					<ActionButton style="w-48" href={'/' + $tacos[0].filename}>Read recipe</ActionButton>
				</div>
				<div class="mx-5 pb-5 text-left border-b border-gray-300 flex flex-col">
					<p class="text-red-600 uppercase font-semibold font-display text-xs tracking-widest mb-1">
						Featured
					</p>
					<a class="font-serif text-xl capitalize" href={'/' + $tacos[1].filename}>
						{$tacos[1].name}
					</a>

					<div class="flex flex-row space-x-6 flex-1">
						<p
							class="font-serif text-gray-600 text-sm leading-snug summary overflow-ellipsis overflow-hidden"
						>
							{@html summary($tacos[1])}
						</p>
					</div>
				</div>
				<div class="mx-4 py-5 text-left flex flex-col">
					<p class="text-red-600 uppercase font-semibold font-display text-xs tracking-widest mb-1">
						{$tacos[2].getTag()}
					</p>
					<a class="font-serif text-xl capitalize" href={'/' + $tacos[2].filename}
						>{$tacos[2].name}</a
					>
					<div class="flex flex-row">
						<p
							class="font-serif text-gray-600 text-sm leading-snug summary overflow-ellipsis overflow-hidden"
						>
							{@html summary($tacos[2])}
						</p>
					</div>
				</div>
			</div>
			<hr class="my-4" />
			<div class="flex flex-col sm:flex-row mb-4">
				<div class="flex flex-col md:border-r border-gray-300 md:w-1/2">
					<div class="mx-4 py-5 text-left flex flex-col">
						<p
							class="text-red-600 uppercase font-semibold font-display text-xs tracking-widest mb-1"
						>
							{$tacos[3].getTag()}
						</p>
						<a class="font-serif text-xl capitalize" href={'/' + $tacos[3].filename}>
							{$tacos[3].name}
						</a>
						<div class="flex flex-row">
							<p class="font-serif text-gray-600 text-sm leading-snug summary">
								{@html summary($tacos[3])}
							</p>
						</div>
					</div>
					<div class="mx-4 py-5 text-left flex flex-col">
						<p
							class="text-red-600 uppercase font-semibold font-display text-xs tracking-widest mb-1"
						>
							{$tacos[4].getTag()}
						</p>

						<a class="font-serif text-xl capitalize" href={'/' + $tacos[4].filename}>
							{$tacos[4].name}
						</a>
						<div class="flex flex-row">
							<p class="font-serif text-gray-600 text-sm leading-snug summary">
								{@html summary($tacos[4])}
							</p>
							<img
								class="h-20"
								src="https://www.600.org/pb-assets/images/editorial/small/600clde2103770_300x200-1627487581913.jpg"
								alt=""
							/>
						</div>
					</div>
				</div>
				<div class="flex flex-col md:w-1/2">
					<div class="mx-4 py-5 text-left flex flex-col">
						<p
							class="text-red-600 uppercase font-semibold font-display text-xs tracking-widest mb-1"
						>
							{$tacos[5].getTag()}
						</p>
						<a class="font-serif text-xl capitalize" href={'/' + $tacos[5].filename}>
							{$tacos[5].name}
						</a>
						<p class="font-serif text-gray-600 text-sm leading-snug summary">
							{@html summary($tacos[5])}
						</p>

						<ActionButton style="w-48" href={'/' + $tacos[1].filename}>
							Read recipe
						</ActionButton>
					</div>
					<div class="mx-4 py-5 text-left flex flex-col">
						<p
							class="text-red-600 uppercase font-semibold font-display text-xs tracking-widest mb-1"
						>
							Try a new {$tacos[6].getTag()}
						</p>

						<a class="font-serif text-xl capitalize" href={'/' + $tacos[6].filename}>
							{$tacos[6].name}
						</a>
						<p class="font-serif text-gray-600 text-sm leading-snug summary">
							{@html summary($tacos[6])}
						</p>
						<div class="flex flex-row justify-between mt-auto">
							<p class="text-gray-700 text-xs font-medium">FREE</p>
							<p class="text-gray-400 text-xs font-medium">JUL 29</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="sm:w-1/3 mt-8 flex flex-col space-y-8">
			<div class="bg-gray-100 border-t border-black pb-5 mx-5 ">
				<div class="p-4 text-sm text-gray-800 font-bold">
					<div class="flex flex-row justify-between">
						<p>Question of the day</p>
					</div>
					<hr class="mt-5" />
				</div>
				<div class="px-5 text-gray-800 flex flex-row justify-between mb-5">
					<div class="flex flex-col">
						<p class="font-serif">What's for dinner?</p>
						<ActionButton href="/matcher">Open matcher</ActionButton>
					</div>
				</div>
			</div>
			<div class="border-t border-black mx-5">
				<div class="py-5 text-gray-800 font-bold text-sm">
					Image of the Week
					<hr class="mt-5" />
				</div>
				<div class="text-gray-800 flex flex-row justify-between mb-5">
					<div class="flex flex-col">
						<!-- svelte-ignore a11y-missing-attribute -->
						<img
							class="w-full h-auto"
							src="https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400"
						/>
					</div>
				</div>
			</div>
			<div class="bg-gray-100 border-t border-black pb-5 mx-5 ">
				<div class="p-5 text-gray-800 font-bold">
					You may be interested in
					<hr class="mt-5" />
				</div>
				<div class="px-5 text-gray-800 flex flex-row justify-between mb-5">
					<div class="flex flex-col">
						{#each Array(5) as _, i}
							<p class="text-red-600 uppercase font-semibold font-display text-xs tracking-widest ">
								Random {$tacos[8 + i].getTag()}
							</p>

							<a
								class="my-2 font-serif capitalize text-lg"
								href={'/' + $tacos[8 + i].filename}
							>
								{$tacos[8 + i].name}
							</a>
							<hr class="my-4" />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	.summary {
		@apply overflow-ellipsis overflow-hidden;
	}
</style>
