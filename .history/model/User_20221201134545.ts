export class User {
    id: number;
    userName: string;
    password: string;

    constructor(id: number, userName: string, password: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
    }

    public getUserName(): string {
        return this.userName;
    }

    public getPassword(): string {
        return this.password;
    }
    public getId(): number {
        return this.id;
    }
    public setName(name: string) {
        this.name = name;
    }
    public setStatus(status: string) {
        this.status = status:
    }
    public setHours(hours: number) {
        this.hours = hours:
    }
    toString() {
        return this.name + ' - Tình trạng: ' + this.status + ' - Số giờ: ' + this.hours + ' - Tổng tiền: ' + this.totalMoney;
    }
}