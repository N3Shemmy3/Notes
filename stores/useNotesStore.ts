import Note from "~/classes/Note";

const useNotesStore = defineStore("notesList", () => {
    const notesList = ref<Note[]>([]);

    function addNote(note: Note) {
        notesList.value.push(note);
    }
    function removeNote(note: Note) {
        const index = notesList.value.indexOf(note);
        if (index !== -1) {
            notesList.value.splice(index, 1);
        }
    }

    function getNote(id: number) {
        const findNote = notesList.value.find(function (note) {
            return note.id == id;
        });
        return findNote;
    }

    function getLength() {
        var length = notesList.value.length;
        return length > 0 ? length : 0;
    }
    return {
        notesList,
        addNote,
        getNote,
        removeNote,
        getLength,
    }
},
    {
        persist: false
    },

);
export default useNotesStore;