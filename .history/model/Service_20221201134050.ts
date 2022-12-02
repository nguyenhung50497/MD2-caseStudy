export class Service {
    name: string;
    status: string;

    constructor(name: string, status: string) {
        this.name = name;
        this.status = status;
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
    public getTotalMoney(): number {
        return this.totalMoney;
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