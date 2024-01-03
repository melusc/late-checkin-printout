<script lang="ts">
	import EnvelopePageExport from './envelope/page-export.svelte';
	import InfoPageExport from './info/page-export.svelte';
	import Input from './input.svelte';
	import '../app.css';

	let gender: 'm' | 'f' | 'd' = 'd';
	let room = 22;
	let name = 'Mickey';
	let surname = 'Mouse';
	let showEnglish = true;
	let showGerman = true;
	$: envelopeName = `${name.at(0)}. ${surname}`;

	function printPage(path: string) {
		const url = new URL(path, location.href);
		const sp = url.searchParams;
		sp.set('gender', gender);
		sp.set('room', String(room));
		sp.set('name', name);
		sp.set('surname', surname);
		sp.set('showEnglish', String(showEnglish));
		sp.set('showGerman', String(showGerman));
		const printWindow = open(
			url.href,
			'',
			'left=0,top=0,toolbar=0,scrollbars=0,status=0',
		)!;
		if (!printWindow) {
			return;
		}

		printWindow.focus();
	}

	function printEnvelope() {
		printPage('envelope');
	}

	function printInfo() {
		printPage('info');
	}
</script>

<svelte:head>
	<title>Late Check-In Printout</title>
</svelte:head>

<Input
	bind:gender
	bind:room
	bind:name
	bind:surname
	bind:showEnglish
	bind:showGerman
/>

<button type="button" on:click|preventDefault={printEnvelope}>
	Umschlag drucken
</button>
<EnvelopePageExport name={envelopeName} {room} {showEnglish} {showGerman} />
<button type="button" on:click|preventDefault={printInfo}>
	Hotelinfo drucken
</button>
<InfoPageExport {name} {room} {gender} {surname} {showEnglish} {showGerman} />

<style>
	button {
		font-size: 20px;
		background: none;
		outline: none;
		border: 1px solid black;
		padding: 0.5em 1em;
		margin: 0.8em;
		border-radius: 0.2em;
		margin-top: 2em;
	}

	button:active,
	button:focus {
		outline: 2px dotted black;
	}
</style>
