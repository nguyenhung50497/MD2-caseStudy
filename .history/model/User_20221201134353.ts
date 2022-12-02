export class User {
    user: string;
    status: string;
    id: number;

    constructor(name: string, status: string, hours: number, totalMoney: number) {
        this.name = name;
        this.status = status;
        this.hours = hours;
    }

    public getName(): string {
        return this.name;
    }

    public getStatus(): string {
        return this.status;
    }
    public getHours(): number {
        return this.hours;
    }
    public setName(name: string) {
        this.name = name;
    }
    public setStatus(status: string) {
        this.status = status:
    }
    public setHours(hours: number) {
        this.hours = hours:
    }
    toString() {
        return this.name + ' - Tình trạng: ' + this.status + ' - Số giờ: ' + this.hours + ' - Tổng tiền: ' + this.totalMoney;
    }
}