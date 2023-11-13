import Note from "~/classes/Note";

const useNotesStore = defineStore('notesList', () => {
    const notesList = ref<Note[]>([]);

    function addNote(note: Note) {
        notesList.value.push(note);
    }
    function removeNote(note: Note) {
        notesList.value.push(note);
    }

    function getNote(id: number) {
        const findNote = notesList.value.find(function (note) {
            return note.id == id;
        });
        return findNote;
    }

    function getLength() {
        if (!notesList.value) return 0;
        return notesList.value.length;
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
    return { notesList, addNote, getNote, removeNote, }
});
export default useNotesStore;