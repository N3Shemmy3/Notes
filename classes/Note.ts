// Note.ts
export default class Note {
    id: number;
    title: string;
    text: string;
    date: number;
    pined: boolean;

    constructor(id: number, title: string, text: string, date: number, pined: boolean) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.date = date;
        this.pined = pined;
    }
    public static getInstance(title: string, text: string) {
        return new Note(0, title, text, new Date().getTime(), false)
    }

    static create({ id, title, text, date, pined }: { id: number; title: string; text: string; date: number; pined: boolean }): Note {
        return new Note(id, title, text, date, pined);
    }
}
