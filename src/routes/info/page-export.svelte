<script lang="ts">
	import PageEnglish from './page-english.svelte';
	import PageGerman from './page-german.svelte';

	export let name: string;
	export let surname: string;
	export let room: number;
	export let gender: 'f' | 'm' | 'd';
</script>

<div class="info">
	<PageGerman {name} {room} {gender} {surname} />
	<PageEnglish {name} {room} {gender} {surname} />
</div>

<style>
	.info {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	@media screen {
		.info {
			border: 1px solid black;
			padding: 0.5cm 1cm;
			margin: 1em;
		}
	}
</style>
