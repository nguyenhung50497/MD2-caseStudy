export class Computer {
    name: string;
    status: string;
    hours: number ;
    totalMoney: number = this.hours * 2;

    constructor(name: string, status: string, hours: number, totalMoney: number) {
        this.name = name;
        this.status = status;
        this.hours = hours;
        this.totalMoney = totalMoney;
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
        this.status = status;
    }
    public setHours(hours: number) {
        this.hours = hours;
    }
    public setTotalMoney(totalMoney: number) {
        this.totalMoney = totalMoney;
    }
    toString() {
        return this.name + ' - Tình trạng: ' + this.status + ' - Số giờ chơi: ' + this.hours + 'h - Tổng tiền: ' + this.totalMoney + '$\n';
    }
}