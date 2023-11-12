<template>
    <div class="p-4 md:p-10">
        <div class="py-8">
            <h4 class="text-3xl font-bold cursor-pointer">Browse</h4>
        </div>

        <NotesGrid :notes="notes" />

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
            text: `Basically, what I need is a computed property that returns true when the window.innerwidth is equal or lower than 768px and false when it's higher than 768px.

What I did:

`,
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
