interface IMineralCosmetics {
    title: string,
    description: string
}

export class MineralCosmetics implements IMineralCosmetics {
    title;
    description;

    constructor (props: IMineralCosmetics) {
        this.title = props.title;
        this.description = props.description;
    }
}