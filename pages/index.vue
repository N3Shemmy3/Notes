<template>
    <div class="relative px-4 md:px-10 py-4 md:py-10">
        <div class="py-8">
            <h4 class="text-3xl font-bold cursor-pointer">Browse</h4>
        </div>
        <div class="w-full grid gap-6 grid-responsive">

            <div
                v-Ripple
                v-for="(n, i) in 12"
                id="div"
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
                        top-0 right-0
                        absolute
                        ml-auto
                        z-[2]
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
                    Note Title
                </h6>

                <p class="text-[13.5px] px-2 opacity-90 line-clamp-6 font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quod sed nemo pariatur doloribus non ipsa
                    cupiditate itaque harum odio, voluptas possimus iusto quas amet illum magni facere? Ut, fugiat.
                </p>

                <div class="flex pl-2 items-center">
                    <p class="text-[13px] m-auto opacity-75 font-bold">
                        Nov 2{{ n }}, 2023
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
            </div>
        </div>
    </div>
</template>
<script setup>
const items = [
    [{
        label: 'Profile',
        avatar: {
            src: 'https://avatars.githubusercontent.com/u/739984?v=4'
        }
    }], [{
        label: 'Edit',
        icon: 'i-heroicons-pencil-square-20-solid',
        shortcuts: ['E'],
        click: () => {
            console.log('Edit')
        }
    }, {
        label: 'Duplicate',
        icon: 'i-heroicons-document-duplicate-20-solid',
        shortcuts: ['D'],
        disabled: true
    }], [{
        label: 'Archive',
        icon: 'i-heroicons-archive-box-20-solid'
    }, {
        label: 'Move',
        icon: 'i-heroicons-arrow-right-circle-20-solid'
    }], [{
        label: 'Delete',
        icon: 'i-heroicons-trash-20-solid',
        shortcuts: ['⌘', 'D']
    }]
</script>

<style scoped>
.grid-responsive {
    grid-area: span;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}
</style>