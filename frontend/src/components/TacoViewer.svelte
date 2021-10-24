<!-- <div class="flex justify-around items-center space-x-6 w-auto">
	<div class="item w-1/3 h-32">1</div>
	<div class="item w-1/3 h-32">2</div>
	<div class="item w-1/3 h-32">3</div>

	
</div> -->
<script>
	import MarkdownIt from 'markdown-it';
	import { onMount } from 'svelte';
	import tacoStore from '../stores/TacoStore';
	import ActionButton from './ActionButton.svelte';
	let md = new MarkdownIt();

	let tacos = tacoStore.elements;
    export let category = "";
    export let file = "";


	onMount(async () => {
		await tacoStore.init();
	});

	let taco;
	$: {
		if ($tacos) {
			taco = $tacos.find(
				(taco) => taco.filename == category + "/" + file.replace(/\.[^/.]+$/, '')
			);
		}
	}
</script>

{#if taco}
	<div class="pt-6 md:p-8 text-left space-y-4 tacoviewer">
		<ActionButton style="float-right" href={"https://github.com/mdeheij/tacofancy/edit/master/"+taco.filename.replace(/\.[^/.]+$/, '')+".md"}>
			Edit
		</ActionButton>
		<div class="recipe" style="list-style-type: disc;">
			{@html md.render(taco.content)}
		</div>
	</div>
{/if}

<style global lang="postcss">
	.tacoviewer h1, .tacoviewer h2 {
		@apply pt-3 pb-1;
	}
</style>