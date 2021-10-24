<script lang="ts">
	import { page } from '$app/stores';
	import TacoViewer from '../../components/TacoViewer.svelte';
</script>

<TacoViewer category={'full_tacos'} file={$page.params.name} />
