<script lang="ts">
	import {data} from '$lib/url-data';
	import './app.css';

	import PageExport from './page-export.svelte';

	let showGerman = true;
	let showEnglish = true;

	const {room, name, surname} = data;

	let formattedName = `${name.at(0)}. ${surname}`;
</script>

<PageExport {showGerman} {showEnglish} {room} name={formattedName} />
