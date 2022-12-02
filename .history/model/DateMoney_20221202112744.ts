export class DateMoney {
    day: string;
    money: number;

    constructor(date: Date, money: number) {
        this.day = date;
        this.money = money;
    }

    public getDay(): Date {
        return this.day;
    }
    public getMoney(): number {
        return this.money;
    }
    public setDay(day: Date) {
        this.day = day;
    }
    public setMoney(money: number) {
        this.money = money;
    }
}