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

	const baseLayers = tacoStore.elements;

	function summary(taco: TacoRecipe) {
		return md.render(taco.summary());
	}

	onMount(async () => {
		tacoStore.init();
	});
</script>

{#if $baseLayers && $baseLayers.length > 3}
	<div class="flex flex-col sm:flex-row max-w-8xl mx-auto">
		<div class="flex flex-col sm:w-2/3 sm:border-r border-gray-300">
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
				<div
					class="p-5 text-left sm:border-r border-gray-300 sm:row-span-2 sm:col-span-2 flex flex-col"
				>
					<!-- <img
						src="./taco.jpg"
						alt="img"
						title="img"
						class="w-full max-h-200 object-cover rounded-t-lg"
						id="whoobe-ixxe5"
					/> -->
					<p class="text-red-600 uppercase font-semibold font-display text-xs tracking-widest my-3">
						{$baseLayers[0].getTag()}
					</p>
					<a class="font-serif text-4xl capitalize pb-4" href={'/' + $baseLayers[0].filename}
						>{$baseLayers[0].name}</a
					>

					<p class="font-serif text-gray-600 text-sm leading-snug summary summary">
						{@html summary($baseLayers[0])}
					</p>

					<ActionButton style="w-48" href={'/' + $baseLayers[0].filename}>Read recipe</ActionButton>
				</div>
				<div class="mx-5 pb-5 text-left border-b border-gray-300 flex flex-col">
					<p class="text-red-600 uppercase font-semibold font-display text-xs tracking-widest mb-1">Featured</p>
					<!-- <a class="font-serif text-xl">Looking Back and Looking Forward</a> -->
					<a class="font-serif text-xl capitalize" href={'/' + $baseLayers[1].filename}>
						{$baseLayers[1].name}
					</a>

					<div class="flex flex-row space-x-6 flex-1">
						<p
							class="font-serif text-gray-600 text-sm leading-snug summary overflow-ellipsis overflow-hidden"
						>
							{@html summary($baseLayers[1])}
						</p>
					</div>
					<!-- <div class="flex flex-row justify-between mt-auto">
						<p class="text-gray-700 text-xs font-medium">FREE</p>
						<p class="text-gray-400 text-xs font-medium">JUL 28</p>
					</div> -->
				</div>
				<div class="mx-4 py-5 text-left flex flex-col">
					<p class="text-red-600 uppercase font-semibold font-display text-xs tracking-widest mb-1">
						{$baseLayers[2].getTag()}
					</p>
					<a class="font-serif text-xl capitalize" href={'/' + $baseLayers[2].filename}
						>{$baseLayers[2].name}</a
					>

					<!-- <a class="font-serif text-xl">Tofacitinib for Covid-19 Pneumonia</a> -->
					<!-- <p class="text-gray-500 my-2 text-sm">P.O. Guimarães and Others</p> -->
					<div class="flex flex-row">
						<p
							class="font-serif text-gray-600 text-sm leading-snug summary overflow-ellipsis overflow-hidden"
						>
							{@html summary($baseLayers[2])}
						</p>
						<!-- <img
							class="h-20"
							src="https://www.600.org/pb-assets/images/editorial/small/600oa2101643_300x200-1627325337143.jpg"
							alt=""
						/> -->
					</div>
					<!-- <div class="flex flex-row justify-between mt-auto">
						<p class="text-gray-700 text-xs font-medium">FREE</p>
						<p class="text-gray-400 text-xs font-medium">JUL 29</p>
					</div> -->
				</div>
			</div>
			<hr class="my-4" />
			<div class="flex flex-col sm:flex-row mb-4">
				<div class="flex flex-col md:border-r border-gray-300 md:w-1/2">
					<div class="mx-4 py-5 text-left flex flex-col">
						<p class="text-red-600 uppercase font-semibold font-display text-xs tracking-widest mb-1">
							{$baseLayers[3].getTag()}
						</p>
						<a class="font-serif text-xl capitalize" href={'/' + $baseLayers[3].filename}>
							{$baseLayers[3].name}
						</a>
						<div class="flex flex-row">
							<p class="font-serif text-gray-600 text-sm leading-snug summary">
								{@html summary($baseLayers[3])}
							</p>
						</div>
					</div>
					<div class="mx-4 py-5 text-left flex flex-col">
						<p class="text-red-600 uppercase font-semibold font-display text-xs tracking-widest mb-1">
							{$baseLayers[4].getTag()}
						</p>

						<a class="font-serif text-xl capitalize" href={'/' + $baseLayers[4].filename}>
							{$baseLayers[4].name}
						</a>
						<div class="flex flex-row">
							<p class="font-serif text-gray-600 text-sm leading-snug summary">
								{@html summary($baseLayers[4])}
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
						<p class="text-red-600 uppercase font-semibold font-display text-xs tracking-widest mb-1">
							{$baseLayers[5].getTag()}
						</p>
						<a class="font-serif text-xl capitalize" href={'/' + $baseLayers[5].filename}>
							{$baseLayers[5].name}
						</a>
						<p class="font-serif text-gray-600 text-sm leading-snug summary">
							{@html summary($baseLayers[5])}
						</p>

						<ActionButton style="w-48" href={'/' + $baseLayers[1].filename}>
							Read recipe
						</ActionButton>
					</div>
					<div class="mx-4 py-5 text-left flex flex-col">
						<p class="text-red-600 uppercase font-semibold font-display text-xs tracking-widest mb-1">
							Try a new {$baseLayers[6].getTag()}
						</p>

						<a class="font-serif text-xl capitalize" href={'/' + $baseLayers[6].filename}>
							{$baseLayers[6].name}
						</a>
						<p class="font-serif text-gray-600 text-sm leading-snug summary">
							{@html summary($baseLayers[6])}
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
			<!-- <p class="text-gray-400 text-center uppercase tracking-widest font-semibold text-xs">
				Advertisement
			</p> -->
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
						<!-- <button
							type="button"
							name="button"
							class="p-2 bg-red-600 w-min mt-4 text-white text-sm tracking-wider font-medium inline-flex"
						>
							Answer
							<svg
								class="w-6 h-6 ml-2"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M14 5l7 7m0 0l-7 7m7-7H3"
								/>
							</svg>
						</button> -->
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
						<img
							alt="Taco image"
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
								Random {$baseLayers[8+i].getTag()}
							</p>

							<a
								class="my-2 font-serif capitalize text-lg"
								href={'/' + $baseLayers[8 + i].filename}
							>
								{$baseLayers[8 + i].name}
							</a>
							<hr class="my-4" />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>

	<table class="max-w-8xl mx-auto hidden">
		<thead>
			<tr
				class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
			>
				<th class="px-4 py-3">Name</th>
				<th class="px-4 py-3">Filename</th>
				<!-- <th class="px-4 py-3">Status</th> -->
				<th class="px-4 py-3">Summary</th>
			</tr>
		</thead>
		<tbody class="bg-white divide-y divide-gray-200">
			{#each $baseLayers as taco}
				<tr
					class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
				>
					<td class="px-4 py-3">
						<div class="flex items-center text-sm">
							<div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
								<!-- <img
												class="object-cover w-full h-full rounded-full"
												src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
												alt=""
												loading="lazy"
											/> -->
								<div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
							</div>
							<div>
								<p class="font-semibold">{taco.name}</p>
								<!-- <p class="text-xs text-gray-600 dark:text-gray-400">10x Developer</p> -->
							</div>
						</div>
					</td>
					<td class="px-4 py-3 text-sm">
						<pre>{taco.filename}</pre>
					</td>
					<!-- <td class="px-4 py-3 text-xs">
									<span
										class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
									>
										Enabled
									</span>
								</td> -->
					<td class="px-4 py-3 text-sm">
						<!-- {taco.content} -->
						{@html summary(taco)}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/if}

<style lang="postcss">
	.summary {
		@apply overflow-ellipsis overflow-hidden;
	}
</style>
