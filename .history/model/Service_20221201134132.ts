export class Service {
    name: string;
    price: number;

    constructor(name: string, price: strinumng) {
        this.name = name;
        this.status = status;
    }

    public getName(): string {
        return this.name;
    }

    public getStatus(): string {
        return this.status;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setStatus(status: string) {
        this.status = status:
    }

    toString() {
        return this.name + ' - Tình trạng: ' + this.status + ' - Số giờ: ' + this.hours + ' - Tổng tiền: ' + this.totalMoney;
    }
}