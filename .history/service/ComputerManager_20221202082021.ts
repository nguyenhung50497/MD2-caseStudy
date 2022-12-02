import { Computer } from "../model/Computer";
import { Service } from "../model/Service";
import { User } from "../model/User";

export class ComputerManager {
    listComputers: Computer[] = [];
    
    addComputer(computer: Computer) {
        this.listComputers.push(computer);
    }
    editComputer(index: number, computer: Computer) {
        return this.listComputers[index] = computer;
    }
    removeComputer(index: number) {
        return this.listComputers.splice(index, 1);
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
            if (i.status === "online") {
                arr.push(i);
            }
        }
        return arr;
    }
    showOfflineComputers() {
        let arr: Computer[] =[];
        for (let i of this.listComputers) {
            if (i.status === "offline") {
                arr.push(i);
            }
        }
        return arr;
    }
    totalTurnover() {
        let sum: number = 0;
        for (let i of this.listComputers) {
            sum += i.totalMoney;
        }
        return sum;
    }

    payBill

}