<template>
	<button
		ref="button"
		v-if="icon"
		:aria-label="name"
		v-Ripple
		class="flex cursor-pointer outline-none noSelect p-2 rounded-full bg-transparent"
	>
		<Icon
			v-Ripple
			type="button"
			class="m-auto icon"
			:name="icon"
			:size="size"
		/>
	</button>
</template>

<script setup lang="ts">
defineProps({
	icon: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	color: String,
	size: {
		type: String,
		default: "24px",
	},
});
const button = ref();
</script>
<style scoped>
.icon {
	pointer-events: none;
}
</style>
