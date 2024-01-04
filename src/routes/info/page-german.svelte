<script lang="ts">
	import footerUrl from '$lib/info-footer.jpeg';
	import RoomGerman from '$lib/room-german.svelte';

	export let room: number;
	export let name: string;
	export let surname: string;
	export let gender: 'm' | 'f' | 'd';
</script>

<div>
	{#if gender === 'd'}
		<p>Guten Tag {name} {surname}</p>
	{:else if gender === 'm'}
		<p>Sehr geehrter Herr {surname}</p>
	{:else}
		<p>Sehr geehrte Frau {surname}</p>
	{/if}

	<p>Willkommen im Hotel Europe in Zürich.</p>
	<p class="title">Haupt-Eingangstür öffnen:</p>
	<p>
		Halten Sie den blauen Bereich des Schlüssels an den weissen Türöffner auf
		der rechten Seite der Tür, oberhalb vom schwarzen Safe.
	</p>
	<p class="bold"><RoomGerman {room} /></p>
	<p>
		Stecken Sie den Schlüssel in das Türschloss und warten Sie auf einen kurzen
		Piepston, dann können Sie die Tür durch drehen des Schlüssels öffnen.
	</p>
	<p class="title">Wi-Fi:</p>
	<p>
		Wählen Sie «Europehotel Guests» aus, akzeptieren Sie die AGBs und loggen
		sich ein
	</p>
	<p class="title">Frühstückszeiten @Restaurant Max & Otto:</p>
	<p>Mo-Sa von 7 bis 10 Uhr</p>
	<p>So von 8 bis 11 Uhr</p>

	<p class="title">Öffnungszeiten der Rezeption:</p>
	<p>Täglich von 7.00 bis 22.00 Uhr</p>
	<p>Für weitere Informationen sind wir ab 7.00 Uhr morgen früh für Sie da.</p>
	<p>Wir wünschen Ihnen eine angenehme Nacht.</p>
	<p>Das Team vom Hotel Europe</p>

	<img src={footerUrl} alt="" />
</div>

<style>
	img {
		width: 90%;
	}

	.title {
		text-decoration: underline;
	}

	.bold {
		font-weight: bold;
	}
</style>
