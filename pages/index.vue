<template>
    <div class="relative px-4 md:px-10 py-4 md:py-10">
        <div class="py-8">

            <h4 class="text-3xl font-bold cursor-pointer">Browse</h4>
        </div>
        <div class="w-full grid gap-4 grid-responsive">

            <div
                v-Ripple
                v-for="(n, i) in 8"
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
                <!--

                <h6 class="text-sm font-semibold">
                    Note Title
                </h6>
            -->
                <div class="absolute p-2 left-0 right-0 bottom-0 top-0 w-full h-full">

                    <div
                        v-if="n == 1 || n == 8"
                        v-Ripple
                        class="
                    top-0 right-0
                    absolute
                    ml-auto
                    z-[2]
                        flex cursor-pointer
                        h-[30px] w-[30px]  
                        rounded-full
                        bg-colorSecondaryLight
                        text-colorOnSecondaryLight
                        dark:bg-colorSecondaryDark
                        dark:text-colorOnSecondaryDark
                        "
                    >
                        <Icon
                            class="m-auto pointer-events-none"
                            name="ic:outline-push-pin"
                            size="18px"
                        />
                    </div>
                </div>
                <p class="text-sm px-2 pt-2 opacity-90 line-clamp-6 font-semibold">
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

<style scoped>
.grid-responsive {
    grid-area: span;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}
</style>