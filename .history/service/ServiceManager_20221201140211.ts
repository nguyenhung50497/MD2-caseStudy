import { Service } from "../model/Service";

export class ServiceManager {
    listServices: Service[] = [];

    addService(service: Service) {
        return this.listServices.push(service);
    }
    editService(in, service: Service) {
}