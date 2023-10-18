<template>
    <div class="mx-auto flex flex-col">
        <div
            v-Ripple
            v-for="(n, i) in   3  "
            id="card"
            class="
            cursor-pointer
            px-4 py-4
            w-full 
            max-w-md
            break-words 
            flex flex-col
            border-[.5px]
            border-opacity-20
            border-colorOutlineLight"
            :class="{ 'rounded-t-md ': i == 0, 'rounded-b-md': i >= 2 }"
        >
            <h6 class="text-l font-semibold">
                Note Title
            </h6>
            <p class="line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quod sed nemo pariatur doloribus non ipsa
                cupiditate itaque harum odio, voluptas possimus iusto quas amet illum magni facere? Ut, fugiat.
            </p>
        </div>
    </div>
</template>

<style scoped>
.grid-responsive {
    grid-area: span;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}
</style>