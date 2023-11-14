<template>
    <TransitionGroup
        tag="ul"
        name="note"
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

.note-move,
/* apply transition to moving elements */
.note-enter-active,
.note-leave-active {
    transition: all 0.5s ease;
}

.note-enter-from,
.note-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.note-leave-active {
    position: absolute;
}
</style>