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
                flex flex-col
                space-y-2
                border-[.5px]
                border-opacity-20
                bg-colorSecondaryContainerLight dark:bg-colorSecondaryContainerDark
                text-colorOnSecondaryContainerLight dark:text-colorOnSecondaryLight
                rounded-lg
                border-colorOutlineLight"
    >

        <div class="absolute py-2 left-0 right-0 bottom-0 top-0 w-full h-full">

            <div
                v-Ripple
                class="
                        
                        flex cursor-pointer
                        h-[30px] w-[30px]  
                        rounded-full
                        "
            >
                <Icon
                    class="m-auto pointer-events-none"
                    name="ic:outline-more-vert"
                    size="22px"
                />
            </div>

        </div>
        <h6 class="text-sm px-2 font-bold">
            {{ note?.getTitle }}
        </h6>

        <p class="text-[13.5px] px-2 opacity-90 line-clamp-6 font-semibold">
            {{ props.note?.getText }}
        </p>

        <div class="flex pl-2 items-center">
            <p class="text-[13px] m-auto opacity-75 font-bold">
                {{ props.note?.getDate }}
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
</script>