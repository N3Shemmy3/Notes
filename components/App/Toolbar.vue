<template>
	<div
		id="Toolbar"
		:class="{ 'border-b-[0.5px] dark:border-opacity-20 border-colorOutlineDark shadow-sm': isScrolled, }"
		class="fixed top-0 z-50 h-[56px] border-t-0 w-full bg-colorSurfaceLight dark:bg-colorSurfaceDark  text-colorOnSurfaceLight dark:text-colorOnSurfaceDark"
	>
		<div class="max-w-screen-xl m-auto flex px-2 py-2 space-x-4 items-center">
			<NuxtLink
				class="flex"
				to="/"
			>
				<div
					class="flex noSelect justify-center content-center hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark">
					<h4 class="text-xl font-bold">Notes</h4>
				</div>
			</NuxtLink>
			<div class="flex-grow" />
			<div class="flex space-x-1">
				<div
					v-Ripple
					v-for="menu in menuItems"
					v-bind:key="menu.icon"
					class="flex cursor-pointer noSelect jsutify-center p-[8px] rounded-full"
				>
					<Icon
						class="m-auto pointer-events-none"
						:name="menu.icon"
						size="24px"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Menu {
	icon: string;
	title: string;
	url: string;
}
const isScrolled = ref()
const menuItems = ref([
	{
		title: "menu",
		icon: "mdi:dots-vertical",
		url: "",
	},
]);
function contactViaEmail(menu: Menu) {
	return menu.title != "Email"
		? menu.url
		: "mailto:" + menu.url + "?subject=Me&body=Hello!";
}
function onMenuItemCliked(menu: Menu) {
	switch (menu.title.toLowerCase()) {
		case "email":
			useEvent("modal:event", { name: "contact", visible: true });
			break;

		default:
			window.open(menu.url);
			break;
	}
}

useListen('event:isToolbarLifted',
	(isToolbarLifted) => {
		isScrolled.value = isToolbarLifted
		console.log(isScrolled.value)
	})
</script>

<style scoped>
.noSelect {
	-webkit-tap-highdark-color: transparent;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.noSelect:focus {
	outline: none !important;
}
</style>
