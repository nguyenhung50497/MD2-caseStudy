import { Service } from "../model/Service";

export class ServiceManager {
    listServices: Service[] = [];

    addService(service: Service) {
        return this.listServices.push(service);
    }
    editService(index: number, service: Service) {
        return this.listServices[index] = service;
    }
    removeService(index: number
}