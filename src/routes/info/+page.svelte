<script lang="ts">
	import PageExport from './page-export.svelte';
	import './app.css';
	import {data} from '$lib/url-data';
	import {onMount} from 'svelte';

	const {gender, room, name, surname, showGerman, showEnglish} = data;

	if (typeof opener !== 'undefined' && opener) {
		focus();
		onMount(() => {
			setTimeout(() => {
				print();
				close();
			}, 1000);
		});
	}
</script>

<PageExport {gender} {room} {name} {surname} {showGerman} {showEnglish} />
