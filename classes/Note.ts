export default class Note {
    private id: number;
    private title: string;
    private text: string;
    private date: number;
    private pined: boolean;

    public Note(title: string, text: string) {
        new Note(0, title, text, new Date().getTime(), false)
    }
    constructor(id: number, title: string, text: string, date: number, pined: boolean) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.date = date;
        this.pined = pined;
    }

    get getId(): number {
        return this.id;
    }

    set setId(value: number) {
        this.id = value;
    }

    get getTitle(): string {
        return this.title;
    }

    set setTitle(value: string) {
        this.title = value;
    }

    get getText(): string {
        return this.text;
    }

    set setText(value: string) {
        this.text = value;
    }

    get getDate(): number {
        return this.date;
    }

    set setDate(value: number) {
        this.date = value;
    }

    get isPined(): boolean {
        return this.pined;
    }

    set setPined(value: boolean) {
        this.pined = value;
    }
}
