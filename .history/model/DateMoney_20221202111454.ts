export class DateMoney {
    day: Date;
    money: number;

    constructor(date: Date, money: number) {
        this.day = date;
        this.money = money;
    }

    public get day(): Date {
}