<script lang="ts">
	import footerUrl from '$lib/info-footer.jpeg';
	import RoomEnglish from '$lib/room-english.svelte';

	export let room: number;
	export let name: string;
	export let surname: string;
	export let gender: 'm' | 'f' | 'd';
</script>

<div class="half-page">
	{#if gender === 'd'}
		<p>Dear {name} {surname}</p>
	{:else if gender === 'm'}
		<p>Dear Mr. {surname}</p>
	{:else}
		<p>Dear Ms. {surname}</p>
	{/if}

	<p>Welcome to Hotel Europe in Zurich.</p>
	<p class="title">How to open the hotel front door:</p>
	<p>
		Hold the blue part of the key close to the white door opener located on the
		right side of the door above the black safe.
	</p>
	<p class="bold"><RoomEnglish {room} /></p>
	<p>
		Put the key in the door lock and wait for a short beep. You can now enter
		the door turning the key counter-clockwise.
	</p>
	<p class="title">Wi-Fi:</p>
	<p>Select “Europehotel Guests”. Accept terms and conditions to log in</p>
	<p class="title">Breakfast time @restaurant Max & Otto:</p>
	<p>Mon-Sat from 7am until 10am</p>
	<p>Sun from 8am until 11am</p>
	<p class="title">Opening time reception:</p>
	<p>Daily from 7am until 10pm</p>
	<p>
		For any further information we are looking forward to be there for you at
		the reception starting 7am.
	</p>
	<p>Have a good night.</p>
	<p>The team of Hotel Europe</p>
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

	.half-page {
		padding-left: 0.5cm;
	}

	@media print {
		.half-page {
			border-left: 1px dotted black;
		}
	}
</style>
