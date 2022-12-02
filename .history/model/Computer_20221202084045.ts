export class Computer {
    name: string;
    status: string;
    moneyService: number;
    time: Date = new Date();
    total

    constructor(name: string, status: string, time: Date, moneyService: number) {
        this.name = name;
        this.status = status;
        this.time = time;
        this.moneyService = moneyService;
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
    public getMoneyService(): number {
        return this.moneyService;
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
    public setMoneyService(moneyService: number) {
        this.moneyService = moneyService;
    }
    toString() {
        return this.name + ' -- Tình trạng: ' + this.status + ' -- Time: ' + this.time + ' -- Tiền dịch vụ: ' + this.moneyService  + '$\n';
    }
}