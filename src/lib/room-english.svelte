<script lang="ts">
	export let room: number;

	$: floor = Math.floor(room / 10);
	$: floorPostfix =
		room < 10
			? ''
			: floor === 1
				? 'st'
				: floor === 2
					? 'nd'
					: floor === 3
						? 'rd'
						: 'th';
</script>

Room #{room} on the {floor}<sup>{floorPostfix}</sup> floor

<style>
	sup {
		font-size: 60%;
	}
</style>
