<script lang="ts">
	export let room: number;

	$: floor = Math.floor(room / 10);
</script>

Zimmer #{room} auf dem {floor}. Stock
