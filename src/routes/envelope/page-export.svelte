<script lang="ts">
	import RoomEnglish from '$lib/room-english.svelte';
	import RoomGerman from '$lib/room-german.svelte';

	export let showGerman: boolean;
	export let showEnglish: boolean;

	export let room: number;
	export let name: string;
</script>

<div class="envelope">
	<div class="name">{name}</div>

	<div class="room-information">
		{#if showEnglish}
			<div class="room-row">
				<RoomEnglish {room} />
			</div>
		{/if}
		{#if showGerman}
			<div class="room-row">
				<RoomGerman {room} />
			</div>
		{/if}
	</div>

	{#if showEnglish}
		<div class="opening-times">
			<div class="row-title">
				<div>Breakfast:</div>
				<div>Reception:</div>
			</div>
			<div class="row-time">
				<div>Mon-Sat</div>
				<div>7am until 10am</div>
				<div>Mon-Sun</div>
				<div>7am until 10pm</div>
			</div>
			<div class="row-time">
				<div>Sun</div>
				<div>8am until 11am</div>
			</div>
		</div>
	{/if}
	{#if showGerman}
		<div class="opening-times">
			<div class="row-title">
				<div>Frühstück:</div>
				<div>Rezeption:</div>
			</div>
			<div class="row-time">
				<div>Mo-Sa</div>
				<div>7:00 bis 10:00</div>
				<div>Mo-So</div>
				<div>7:00 bis 22:00</div>
			</div>
			<div class="row-time">
				<div>So</div>
				<div>8:00 bis 11:00</div>
			</div>
		</div>
	{/if}
</div>

<style>
	@media screen {
		.envelope {
			border: 1px solid black;
			padding: 2cm;
			margin: 1em;
			max-width: 229mm;
			max-height: 162mm;
		}
	}

	@media print {
		.envelope {
			width: 100%;
			height: 100%;
		}
	}

	.name {
		font-size: 35pt;
		margin-bottom: 1cm;
	}

	.room-row {
		font-size: 22pt;
	}

	.room-information {
		margin-bottom: 1.5cm;
	}

	.opening-times {
		margin-bottom: 0.5cm;
	}

	.row-title {
		font-size: 16pt;
	}
	.row-time {
		font-size: 14pt;
	}

	.row-title {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: flex-start;
	}

	.row-time {
		display: grid;
		grid-template-columns: 10ch 1fr 10ch 1fr;
		align-items: flex-start;
	}
</style>
