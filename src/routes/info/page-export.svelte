<script lang="ts">
	import PageEnglish from './page-english.svelte';
	import PageGerman from './page-german.svelte';

	export let name: string;
	export let surname: string;
	export let room: number;
	export let gender: 'f' | 'm' | 'd';
	export let showGerman: boolean;
	export let showEnglish: boolean;
</script>

<div class="info">
	{#if showGerman}
		<PageGerman {name} {room} {gender} {surname} />
	{/if}
	{#if showGerman && showEnglish}
		<div class="border"></div>
	{/if}
	{#if showEnglish}
		<PageEnglish {name} {room} {gender} {surname} />
	{/if}
</div>

<style>
	.info {
		display: grid;
		grid-template-columns: 1fr 1px 1fr;
		gap: 0.5cm;
	}

	@media screen {
		.info {
			border: 1px solid black;
			padding: 0.5cm 1cm;
			margin: 1em;
		}
	}

	.border {
		border: 1px dashed black;
	}
</style>
