<template>
    <div class="relative px-4 md:px-10 py-4 md:py-10">
        <div class="py-8">
            <h4 class="text-3xl font-bold cursor-pointer">Browse</h4>
        </div>
        <NotesGrid />

    </div>
</template>
<script setup>
import Note from '~/classes/Note'
const notes = ref < Array < Note >> ([]);


onMounted(() => {
    for (let index = 0; index < 25; index++) {
        var note = new Note("Note Title" + index, "Note Text");
        note.setId(index)
        notes.push(note)
    }

})

const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];
</script>
