<template>
    <div class="m-auto">
        <div class="py-10">

            <h4 class="text-3xl font-bold cursor-pointer">Browse</h4>
        </div>
        <div class="w-full grid gap-4 grid-responsive">

            <card
                v-Ripple
                v-for="(n, i) in 8"
                id="card"
                class="
            cursor-pointer
            px-4 py-4
            h-fit
            w-full
            flex flex-col
            space-y-2
            border-[.5px]
            border-opacity-20
            bg-colorSecondaryContainerDark
            text-colorOnSecondaryContaineDark
            rounded-lg
            border-colorOutlineLight"
            >
                <h6 class="text-sm font-semibold">
                    Note Title
                </h6>
                <p class="text-sm line-clamp-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quod sed nemo pariatur doloribus non ipsa
                    cupiditate itaque harum odio, voluptas possimus iusto quas amet illum magni facere? Ut, fugiat.
                </p>
            </card>
        </div>
    </div>
</template>

<style scoped>
.grid-responsive {
    grid-area: span;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>