<script>
	import MarkdownIt from 'markdown-it';
	import ActionButton from './ActionButton.svelte';
	let md = new MarkdownIt();
	export let taco;
</script>

{#if taco}
	<div class="p-6">
		<div class="flex items-center space-x-6 mb-4">
			<div>
				<a href={'/' + taco.filename} class="text-2xl text-gray-700 font-bold mb-1 capitalize font-display">{taco.name}</a>
				<p class="text-base text-red-600 font-bold font-normal uppercase font-display">
					{taco.getTag()}
				</p>
			</div>
		</div>
		<div>
			<div class="text-gray-600 leading-loose font-normal text-base summary">
				{@html md.render(taco.summary())}
			</div>

			<ActionButton style="w-auto" href={'/' + taco.filename}>Read more</ActionButton>
		</div>
	</div>
{/if}
