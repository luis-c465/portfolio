<script>
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { p } from '$lib/data/assets';
	import { RESUME } from '$lib/params';
	import { onMount } from 'svelte';

	/** @type {any} */
	let PdfViewer;

	onMount(async () => {
		const module = await import('svelte-pdf');
		PdfViewer = module.default;
	});

	const { item, title } = RESUME;
</script>

<CommonPage {title}>
	<div class="resume">
		{#if item}
			<svelte:component
				this={PdfViewer}
				url={p`Resume.pdf`}
				showBorder={false}
				showButtons={['zoom', 'print', 'download']}
			/>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>
