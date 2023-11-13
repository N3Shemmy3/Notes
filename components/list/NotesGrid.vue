<template>
    <TransitionGroup
        tag="ul"
        name="fade"
        class="grid gap-4 grid-responsive"
    >
        <NoteItem
            v-for="note in props.notes"
            :note="note"
            :key="note.id"
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