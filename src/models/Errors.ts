export class Errors {
    errors: Array<Error>

    constructor() {
        this.errors = [];
    }

    add(e: Error) {
        this.errors.push(e);
    }

    remove(id: number) {
        if(id < 0 || id >= this.errors.length) return;
        this.errors.splice(id, 1);
    }
}