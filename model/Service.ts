export class Service {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setPrice(price: number) {
        this.price = price;
    }

    toString() {
        return this.name + ' - Giá: ' + this.price;
    }
}