<template>
    <ol class="grid gap-6 grid-responsive">
        <NoteItem
            v-for="note in props.notes"
            :note="note"
            :key="note.id"
        />
    </ol>
</template>

<script setup lang="ts">
import Note from '../../classes/Note';
const props = defineProps({
    notes: {
        type: Array as () => Note[],
        required: true,
    },
})
onMounted(() => {
})
</script>

<style scoped>
.grid-responsive {
    grid-area: span;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}
</style>