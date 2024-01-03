<script lang="ts">
	import EnvelopePageExport from './envelope/page-export.svelte';
	import InfoPageExport from './info/page-export.svelte';
	import Input from './input.svelte';

	let gender: 'm' | 'f' | 'd' = 'd';
	let room = 22;
	let name = 'Mickey';
	let surname = 'Mouse';
	let showEnglish = true;
	let showGerman = true;

	function printPage(name: string) {
		const url = new URL(`/${name}`, location.href);
		const sp = url.searchParams;
		sp.set('gender', gender);
		sp.set('room', String(room));
		sp.set('name', name);
		sp.set('surname', surname);
		sp.set('showEnglish', String	(showEnglish));
		sp.set('showGerman', String(showGerman));
		const printWindow = open(
			`/${name}`,
			'',
			'left=0,top=0,toolbar=0,scrollbars=0,status=0',
		)!;
		if (!printWindow) {
			return;
		}

		printWindow?.addEventListener('load', () => {
			printWindow.focus();
			printWindow.print();
			printWindow.close();
		});
	}

	function printEnvelope() {
		printPage('envelope');
	}

	function printInfo() {
		printPage('info');
	}
</script>

<Input
	bind:gender
	bind:room
	bind:name
	bind:surname
	bind:showEnglish
	bind:showGerman
/>

<button on:click={printEnvelope}>Umschlag drucken</button>
<EnvelopePageExport {name} {room} {showEnglish} {showGerman} />
<button on:click={printInfo}>Hotelinfo drucken</button>
<InfoPageExport {name} {room} {gender} {surname} />

<style>
	button {
		font-size: 20px;
		background: none;
		outline: none;
		border: 1px solid black;
		padding: 0.5em 1em;
		margin: .8em;
		border-radius: 0.2em;
		margin-top: 2em;
	}

	button:active, button:focus {
		outline: 2px dotted black;
	}
</style>
