<script lang="ts">
	import {data} from '$lib/url-data';
	import './app.css';

	import PageExport from './page-export.svelte';

	const {room, name, surname, showGerman, showEnglish} = data;

	$: formattedName = `${name.at(0)}. ${surname}`;
</script>

<PageExport {showGerman} {showEnglish} {room} name={formattedName} />
