<script lang="ts">
	import { base } from '$app/paths';
	import Card from '$lib/components/Card/Card.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { getAssetURL } from '$lib/data/assets';
	import { SKILLS } from '$lib/params';
	import { isBlank } from '@riadh-adrani/utils';
	import { groupBy } from 'lodash-es';

	const { items, title } = SKILLS;

	let result = groupBy(items, (s) => s.type);

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search;

		if (isBlank(query)) {
			result = groupBy(items, (s) => s.type);
			return;
		}

		const filtered = items.filter((it) => it.name.toLowerCase().includes(query));
		result = groupBy(filtered, (s) => s.type);
	};
</script>

<SearchPage {title} on:search={onSearch}>
	{#if Object.keys(result).length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		<div class="flex flex-row gap-12 md:gap-8 lg:gap-16 mt-10 flex-wrap">
			{#each Object.entries(result) as [key, skills] (key)}
				<div
					class="flex flex-col gap-2 md:gap-3 lg:gap-5 gap-3 flex-start max-md:w-full md:max-xl:w-5/12 xl:w-3/12"
				>
					<div class="">{key.toUpperCase()}</div>

					{#each skills as skill (skill.slug)}
						<Card
							classes={['cursor-pointer decoration-none']}
							tiltDegree={1}
							href={`${base}/skills/${skill.slug}`}
							bgImg={getAssetURL(skill.logo)}
							color={skill.color}
						>
							<p class="text-[var(--tertiary-text)]">{skill.name}</p>
						</Card>
					{/each}
				</div>
			{/each}
		</div>
	{/if}
</SearchPage>
