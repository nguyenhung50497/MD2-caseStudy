import { DateMoney } from "../model/DateMoney";

export class DateMoneyManager {
    listDateMoney: DateMoney[] = [];

    addDateMoney(dateMoney: DateMoney) {
        this.listDateMoney.push(dateMoney);
    }

    show

    allDateMoney() {
        let sum: number = 0;
        for (let i of this.listDateMoney) {
            sum += i.money;
        }
        return sum;
    }

}