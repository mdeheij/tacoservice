<script>
	export let style = "";
	export let href = "#";
</script>

<a
	{href}
	name="button"
	class={"p-2 font-display bg-red-600 mt-4 text-white transition duration-200 hover:bg-red-400 text-sm tracking-wider font-medium inline-flex "+style}
>
	<slot/>
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
</a>
