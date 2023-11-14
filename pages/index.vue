<template>
    <div class="p-4 md:p-10">
        <div class="py-8">
            <h4 class="text-3xl font-bold cursor-pointer">Browse</h4>
        </div>

        <NotesGrid :notes="notesList" />

    </div>
</template>
<script setup lang="ts">
import useNotesStore from '~/stores/useNotesStore';

const notesStore = useNotesStore()
const { notesList } = notesStore;
onMounted(() => {

})

const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];
</script>
