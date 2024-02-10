<script lang="ts">
	import { browser } from '$app/environment';
	import { base } from '$app/paths';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { RESUME } from '$lib/params';

	import Document from '$lib/PDFViewer/Document.svelte';
	import Page from '$lib/PDFViewer/Page.svelte';
	import { preferThisWidth } from '$lib/utils/target_dimension';
	import { getDocument } from 'pdfjs-dist';
	console.log(getDocument);

	let scale = 1;

	let target_width: number;

	let sizing = 0;

	const { item, title } = RESUME;
</script>

<svelte:window bind:innerWidth={target_width} />
<CommonPage {title}>
	<div class="resume">
		{#if item}
			{#if browser}
				<!-- {base}/ isn't neceassary if your app lives at the root of your host.
	---- However we're serving this demo through github pages so the pdfs will
	---- be at /svelte-pdfjs/filename.pdf
	-->
				<Document
					file="Resume.pdf"
					loadOptions={{ docBaseUrl: base }}
					on:loaderror={(e) => alert(e.detail + '')}
				>
					<div>
						<Page
							scale={1}
							num={1}
							renderTextLayer
							getViewport={preferThisWidth(Math.min(target_width, 1100))}
						/>
					</div>
				</Document>
			{/if}
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
