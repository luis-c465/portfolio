<script lang="ts">
	import { set_pdfjs_context } from '$lib/utils/pdfjs';

	set_pdfjs_context();
</script>

<slot />
