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

    public getStatus(): string {
        return this.price;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setStatus(price: number) {
        this.price = price:
    }

    toString() {
        return this.name + ' - Tình trạng: ' + this.status + ' - Số giờ: ' + this.hours + ' - Tổng tiền: ' + this.totalMoney;
    }
}