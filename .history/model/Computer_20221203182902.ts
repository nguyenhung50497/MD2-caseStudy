export class Computer {
    id: number;
    status: string;
    moneyService: number;
    time: Date = new Date();
    totalMoney: number = 0;

    constructor(id: number, status: string, time: Date, moneyService: number) {
        this.id = id;
        this.status = status;
        this.time = time;
        this.moneyService = moneyService;
    }

    public getId(): number {
        return this.id;
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
    public setId(id: number) {
        this.id = id;
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
        return 'Máy ' + this.id + ' -- Tình trạng: ' + this.status + ' -- Tiền dịch vụ: ' + this.moneyService  + '$\n';
    }
}