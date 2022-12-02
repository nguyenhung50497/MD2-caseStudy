export class Computer {
    name: string;
    status: string;
    hours: number;
    totalMoney: number;
    time: Date ;

    constructor(name: string, status: string, time: Date, hours: number, totalMoney: number) {
        this.name = name;
        this.status = status;
        this.time = time;
        this.hours = hours;
        this.totalMoney = totalMoney;
    }

    public getName(): string {
        return this.name;
    }
    public getStatus(): string {
        return this.status;
    }
    public getTime(): Date {
        return this.time;
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
    public setTime(time: Date) {
        this.time = time;
    }
    public setHours(hours: number) {
        this.hours = hours;
    }
    public setTotalMoney(totalMoney: number) {
        this.totalMoney = totalMoney;
    }
    toString() {
        return this.name + ' -- Tình trạng: ' + this.status + ' -- Time: ' + this.time + ' -- Số giờ chơi: ' + this.hours + 'h -- Tổng tiền: ' + this.totalMoney  + '$\n';
    }
}