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

    public setId(id: number) {
        this.id = id;
    }

    public setUserName(userName: string) {
        this.userName = userName;
    }

    public setPassword(status: string) {
        this.password = status:
    }
    
    toString() {
        return this.name + ' - Tình trạng: ' + this.status + ' - Số giờ: ' + this.hours + ' - Tổng tiền: ' + this.totalMoney;
    }
}