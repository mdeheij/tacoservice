<script>
	import { onMount } from 'svelte';
	import tacoStore from '../stores/TacoStore';
	import RecipeCard from './RecipeCard.svelte';
	import ShuffleButton from './ShuffleButton.svelte';

	let tacos = tacoStore.elements;
	let base_layer;
	let condiment;
	let mixin;
	let seasoning;
	let full_taco;

	const pickFullTaco = () => {
		full_taco = pick('full_tacos');
	};
	const pickBaseLayer = () => {
		base_layer = pick('base_layers');
	};
	const pickCondiment = () => {
		condiment = pick('condiments');
	};
	const pickMixin = () => {
		mixin = pick('mixins');
	};
	const pickSeasoning = () => {
		seasoning = pick('seasonings');
	};

	const pick = (category) => {
		return shuffle()
			.filter((element) => element.category == category)
			.find((element) => {
				return element;
			});
	};

	const shuffle = () => {
		return $tacos.sort(() => Math.random() - 0.5);
	};

	onMount(() => {
		tacoStore.init().then(() => {
			pickFullTaco();
			pickBaseLayer();
			pickCondiment();
			pickMixin();
			pickSeasoning();
		});
	});
</script>

<div class="lg:p-8">
	{#if full_taco}
		<div class="layer-row">
			<div class="icon pl-8">
				<img alt="Full taco icon" src="/full_taco.svg" />
			</div>
			<div class="card-container flex-grow">
				<RecipeCard taco={full_taco} />
			</div>
			<div class="shuffle-button">
				<ShuffleButton on:shuffle={pickFullTaco} />
			</div>
		</div>
	{/if}
	{#if base_layer}
		<div class="layer-row">
			<div class="icon pl-8">
				<img alt="Base layer icon" src="/base_layer.svg" />
			</div>
			<div class="card-container flex-grow">
				<RecipeCard taco={base_layer} />
			</div>
			<div class="shuffle-button">
				<ShuffleButton on:shuffle={pickBaseLayer} />
			</div>
		</div>
	{/if}
	{#if condiment}
		<div class="layer-row">
			<div class="icon pl-8">
				<img alt="Condiment icon" src="/condiment.svg" />
			</div>
			<div class="card-container flex-grow">
				<RecipeCard taco={condiment} />
			</div>
			<div class="shuffle-button">
				<ShuffleButton on:shuffle={pickCondiment} />
			</div>
		</div>
	{/if}
	{#if mixin}
		<div class="layer-row">
			<div class="icon pl-8">
				<img alt="Mixin icon" src="/mixin.svg" />
			</div>
			<div class="card-container flex-grow">
				<RecipeCard taco={mixin} />
			</div>
			<div class="shuffle-button">
				<ShuffleButton on:shuffle={pickMixin} />
			</div>
		</div>
	{/if}
	{#if seasoning}
		<div class="layer-row">
			<div class="icon pl-8">
				<img alt="Seasoning icon" src="/seasoning.svg" />
			</div>
			<div class="card-container flex-grow">
				<RecipeCard taco={seasoning} />
			</div>
			<div class="shuffle-button">
				<ShuffleButton on:shuffle={pickSeasoning} />
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
	.layer-row {
		@apply md:flex flex-wrap items-center space-x-6 w-auto border mx-auto mt-8;
	}
	.icon {
		@apply my-8 mx-auto w-48 md:w-32 lg:w-48 xl:w-52;
	}
	.card-container {
		@apply md:w-32;
	}
	.shuffle-button {
		@apply w-full lg:w-48 mx-auto text-center border-t lg:border-0;
	}
</style>
