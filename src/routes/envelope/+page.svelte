<script lang="ts">
	import {data} from '$lib/url-data';
	import './app.css';

	import PageExport from './page-export.svelte';

	const {room, name, surname, showGerman, showEnglish} = data;

	$: formattedName = `${name.at(0)}. ${surname}`;
</script>

<svelte:head>
	<title>Envelope generator</title>
</svelte:head>

<PageExport {showGerman} {showEnglish} {room} name={formattedName} />
