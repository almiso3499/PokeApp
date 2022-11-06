export class Pokemon {
    id: number;
    name: string;
    url: string;

    constructor(init?: Pokemon | Partial<Pokemon>) {
        this.id = 0;
        this.name = '';
        this.url = '';

        if (init == null) return;
        Object.assign(this, init);
    }
}