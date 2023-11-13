<template>
    <li
        v-Ripple
        class="
        cursor-pointer
        p-2
        h-fit
        w-full
        hover:shadow-lg
        dark:hover:bg-colorPrimaryContainerDark
        hover:bg-colorPrimaryContainerLight
        transition-all
        duration-300
        flex
        flex-col
        space-y-2
        border-[.5px]
        border-opacity-20
        bg-colorSecondaryContainerLight
        dark:bg-colorSecondaryContainerDark
        text-colorOnSecondaryContainerLight
        dark:text-colorOnSecondaryLight
        rounded-lg
        border-colorOutlineLight"
    >

        <div class="absolute flex py-2 left-0 right-0 bottom-0 top-0 w-full h-full">
            <DropDown class="ml-auto">
                <template #toggler>
                    <IconButton icon="ic:outline-more-vert" />
                </template>
                <DropDownContent>
                    <DropDownItem>Action 1</DropDownItem>
                    <DropDownItem>Action 2</DropDownItem>
                    <DropDownItem>Action 3</DropDownItem>
                </DropdownContent>
            </DropDown>
        </div>
        <h6 class="text-sm px-2 font-bold">
            {{ props.note?.title }}
        </h6>

        <p class="text-[13.5px] px-2 opacity-90 line-clamp-6 font-semibold">
            {{ props.note?.text }}
        </p>

        <div class="flex pl-2 items-center">
            <p class="text-[13px] m-auto opacity-75 font-bold">
                {{ date?.getTime }}
            </p>
            <div class="flex-grow" />
            <div
                v-Ripple
                v-if="false"
                class="
                        m-auto
                        flex cursor-pointer
                        h-[32px] w-[32px]  
                        rounded-full
                        bg-colorTertiaryLight
                        text-colorOnTertiaryLight
                        dark:bg-colorTertiaryDark
                        dark:text-colorOnTertiaryDark
                        "
            >
                <Icon
                    class="m-auto pointer-events-none"
                    name="ic:outline-edit"
                    size="18px"
                />
            </div>
        </div>
    </li>
</template>
<script setup lang="ts">
import Note from "../../classes/Note";
const props = defineProps({
    note: Note,
})
const date = ref<Date>()
onMounted(() => {
    date.value?.setDate(props.note?.date!)
})
</script>
<style scoped>
/** 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
    position: absolute;
}
</style>