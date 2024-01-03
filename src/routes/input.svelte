<script lang="ts">
	export let room: number;
	export let surname: string;
	export let name: string;
	export let gender: 'm' | 'f' | 'd';
	export let showGerman: boolean;
	export let showEnglish: boolean;
</script>

<div class="inputs">
	<label>
		Zimmer:
		<input type="number" bind:value={room} />
	</label>

	<label>
		Vorname:
		<input bind:value={name} />
	</label>

	<label>
		Nachname:
		<input bind:value={surname} />
	</label>

	<label>
		Deutsch:
		<input type="checkbox" bind:checked={showGerman} />
	</label>

	<label>
		Englisch:
		<input type="checkbox" bind:checked={showEnglish} />
	</label>

	<label>
		Gender:
		<select bind:value={gender}>
			<option value="d" selected> Unbekannt / Divers </option>
			<option value="f"> Weiblich </option>
			<option value="m"> Männlich </option>
		</select>
	</label>
</div>

<style>
	.inputs {
		display: flex;
		flex-direction: column;
		gap: 0.5em;

		margin: 2em;
	}

	label {
		display: grid;
		grid-template-columns: 15ch 1fr;
		justify-items: flex-start;
		align-items: center;
	}

	@media print {
		.inputs {
			display: none;
		}
	}
</style>
