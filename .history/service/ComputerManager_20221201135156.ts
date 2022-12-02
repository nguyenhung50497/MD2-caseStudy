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
    removeComputer(index: number, computer: Computer) {
        return this.listComputers.splice(index, 1);
    }
    addService(service: Service) {}
}