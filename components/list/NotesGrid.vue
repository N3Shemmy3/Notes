<template>
    <TransitionGroup
        tag="ul"
        name="fade"
        class="grid gap-4 grid-responsive"
    >
        <NoteItem
            v-for="(note, index) in props.notes"
            :note="note"
            :key="index"
        />
    </TransitionGroup>
</template>

<script setup lang="ts">
import Note from '../../classes/Note';
const props = defineProps({
    notes: {
        type: Array as () => Note[],
        required: true,
    },
})
const windowWidth = ref();
onMounted(() => {
    window.addEventListener('resize', () => {
        windowWidth.value = window.innerWidth
        console.log(isTablet)
    })
})
computed(() => {
    isTablet()
})
function isTablet() {
    return windowWidth.value >= 768;
}
</script>

<style scoped>
.grid-responsive {
    grid-area: span;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}

fade-enter-active,
fade-leave-active {
    transition: all 1s;
}

fade-enter,
.fade-leave-to

/* .list-leave-active below version 2.1.8 */
    {
    opacity: 0;
    transform: translateY(30px);
}
</style>