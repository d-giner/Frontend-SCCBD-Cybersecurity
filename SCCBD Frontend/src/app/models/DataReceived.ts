export class DataReceived {
    private cipherText: string;
    private iv: string;

    constructor() { }

    public getCipherText(): string {
        return this.cipherText;
    }

    public getIv(): string {
        return this.iv;
    }
}