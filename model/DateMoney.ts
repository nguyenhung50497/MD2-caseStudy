export class DateMoney {
    day: string;
    money: number;

    constructor(date: string, money: number) {
        this.day = date;
        this.money = money;
    }

    public getDay(): string {
        return this.day;
    }
    public getMoney(): number {
        return this.money;
    }
    public setDay(day: string) {
        this.day = day;
    }
    public setMoney(money: number) {
        this.money = money;
    }
}