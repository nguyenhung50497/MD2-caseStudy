export class DateMoney {
    day: Date;
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
    pub
}