export class Computer {
    id: number;
    status: string;
    moneyService: number;
    time: Date = new Date();
    totalMoney: number = 0;

    constructor(name: number, status: string, time: Date, moneyService: number) {
        this.name = name;
        this.status = status;
        this.time = time;
        this.moneyService = moneyService;
    }

    public getName(): number {
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
    public setName(name: number) {
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
        return 'Máy ' + this.name + ' -- Tình trạng: ' + this.status + ' -- Tiền dịch vụ: ' + this.moneyService  + '$\n';
    }
}