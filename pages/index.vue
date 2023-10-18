<template>
    <div class="mx-auto flex flex-col grid-responsive ">
        <div
            v-Ripple
            v-for="n in 100"
            id="card"
            class="
            px-4 py-2
            w-full 
            break-words 
            flex flex-col
            border-colorOutlineLight 
            dark:border-colorOutlineDark
            rounded-md 
            shadow-sm"
        >
            <h6>
                Note Title
            </h6>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
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