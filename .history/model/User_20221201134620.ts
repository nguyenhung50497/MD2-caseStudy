export class User {
    id: number;
    userName: string;
    password: string;

    constructor(id: number, userName: string, password: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
    }

    public getId(): number {
        return this.id;
    }

    public getUserName(): string {
        return this.userName;
    }

    public getPassword(): string {
        return this.password;
    }

    public setId(hours: number) {
        this.hours = hours:
    }

    public setName(name: string) {
        this.name = name;
    }

    public setStatus(status: string) {
        this.status = status:
    }
    
    toString() {
        return this.name + ' - Tình trạng: ' + this.status + ' - Số giờ: ' + this.hours + ' - Tổng tiền: ' + this.totalMoney;
    }
}