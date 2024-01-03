<script lang="ts">
	import PageExport from './page-export.svelte';
	import './app.css';
	import {data} from '$lib/url-data';

	const {gender, room, name, surname, showGerman, showEnglish} = data;
</script>

<PageExport {gender} {room} {name} {surname} {showGerman} {showEnglish} />
