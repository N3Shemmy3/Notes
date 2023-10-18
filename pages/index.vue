<template>
    <div class="mx-auto grid gap-3 grid-responsive py-4">
        <div
            v-Ripple
            v-for="n in 100"
            id="card"
            class="
            px-4
            w-full 
            break-words 
            flex flex-col 
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