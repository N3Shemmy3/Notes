<template>
	<button
		ref="button"
		v-if="icon"
		v-Ripple
		class="flex cursor-pointer outline-none noSelect h-12 w-12 rounded-full bg-transparent"
	>
		<Icon v-Ripple type="button" class="m-auto icon" :name="icon" size="24px" />
	</button>
</template>

<script setup lang="ts">
	defineProps({
		icon: String,
		color: String,
	});
	const emit = defineEmits(["inFocus", "submit"]);
	const button = ref();
</script>
<style scoped>
	.icon {
		pointer-events: none;
	}
</style>
