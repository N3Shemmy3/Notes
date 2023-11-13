export default class ItemMenu {

    icon: string;
    title: string;
    subTitle: string;
    path: string;
    checked: boolean;

    constructor(
        icon: string, title: string, subTitle: string, path: string, checked: boolean) {
        this.icon = icon;
        this.title = title;
        this.subTitle = subTitle;
        this.path = path;
        this.checked = checked;
    }

    static init({ icon, title }:
        {
            icon: string;
            title: string;
        }):
        ItemMenu {
        return new ItemMenu(icon, title, "", "", false);
    }
    static create({ icon, title, subTitle, path, checked }:
        {
            icon: string;
            title: string;
            subTitle: string;
            path: string
            checked: boolean
        }):
        ItemMenu {
        return new ItemMenu(icon, title, subTitle, path, checked);
    }
}
