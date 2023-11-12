<template>
	<button
		v-Ripple
		class="text-base outline-none px-4 py-2 rounded-lg bg-colorPrimaryLight text-colorOnPrimaryLight"
	>
		<Icon v-if="icon" class="me-1 icon" :name="icon" />
		{{ text }}
	</button>
</template>

<script setup lang="ts">
	defineProps({
		type: String,
		icon: String,
		text: String,
	});
</script>
<style scoped>
	.icon {
		pointer-events: none;
	}
</style>
