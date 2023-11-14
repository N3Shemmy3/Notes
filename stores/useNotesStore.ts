import Note from "~/classes/Note";
import { watch } from "vue";
import localforage from 'localforage';

const storeKey = "notesStore"

const useNotesStore = defineStore(storeKey, async () => {
    const notesList = ref<Note[]>([]);

    if (await localforage.getItem(storeKey)) {
        const storedNotes = await localforage.getItem("notesStore");
        notesList.value = storedNotes ? (storedNotes as Note[]) : [];
    }
    watch(
        notesList,
        (notes) => {
            localforage.setItem(storeKey, JSON.stringify(notes));
        },
        { deep: true }
    );

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

    /**
     * 
    const addNote = () => {
        for (let index = 0; index < 25; index++) {
            const note = Note.create({
                id: notes.value.length + index,
                title: `Title ${notes.value.length + index}`,
                text: `Basically, what I need is a computed property that returns true when the window.innerwidth is equal or lower than 768px and false when it's higher than 768px.What I did:`,
                date: Date.now(),
                pined: false,
            });
            notes.value.push(note)
            //console.log(notes.value)
        }
    }
     
    */
    return {
        notesList,
        addNote,
        getNote,
        removeNote,
        getLength,
    }
});
export default useNotesStore;