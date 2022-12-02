export class Computer {
    name: string;
    status: string;
    hours: number;
    totalMoney: number;

    constructor(name: string, status: string, hours: number, totalMoney: number) {
        this.name = name;
        this.status = status;
        this.hours = hours;
        this.totalMoney = totalMoney;
    }

    public getName(): string {
        return this.name;
    }
}