import { Computer } from "../model/Computer";
import { Service } from "../model/Service";

export class ComputerManager {
    listComputers: Computer[] = [];
    priceHour: number = 2;
    
    addComputer(computer: Computer) {
        this.listComputers.push(computer);
    }
    editComputer(index: number, computer: Computer) {
        this.listComputers[index].id = computer.id;
    }
    removeComputer(index: number) {
        this.listComputers.splice(index, 1);
    }
    buyService(index: number, service: Service) {
        return this.listComputers[index].totalMoney += service.price;
    }
    showAllComputers() {
        return this.listComputers;
    }
    showOnlineComputers() {
        let arr: Computer[] =[];
        for (let i of this.listComputers) {
            if (i.getStatus() === "online") {
                arr.push(i);
            }
        }
        return arr;
    }
    showOfflineComputers() {
        let arr: Computer[] =[];
        for (let i of this.listComputers) {
            if (i.getStatus() === "offline") {
                arr.push(i);
            }
        }
        return arr;
    }
    totalTurnover() {
        let sum: number = 0;
        for (let i=1; i < this.listComputers.length; i++) {
            sum += this.payBill(i);
        }
        return sum;
    }

    payBill(index: number) {
        let newTime = new Date;
        let sum = (newTime.getSeconds() - this.listComputers[index].getTime().getSeconds()) * this.priceHour + this.listComputers[index].getMoneyService;
        return sum;
    }

    changePriceHour(newPrice: number) {
        return this.priceHour = newPrice;
    }

}