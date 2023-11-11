<template>
    <div class="p-4 md:p-10">
        <div class="py-8">
            <h4 class="text-3xl font-bold cursor-pointer">Browse</h4>
        </div>
        <NotesGrid
            class="flex-grow"
            :notes="notes"
        />

    </div>
</template>
<script setup lang="ts">
import Note from '~/classes/Note'
const notes = ref<Note[]>([]);

const addNote = () => {
    for (let index = 0; index < 25; index++) {
        const note = Note.create({
            id: notes.value.length + index,
            title: `Title ${notes.value.length + index}`,
            text: `Text ${notes.value.length + index}`,
            date: Date.now(),
            pined: false,
        });
        notes.value.push(note)
        //console.log(notes.value)
    }
}
onMounted(() => {
    addNote()
})

const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];
</script>
