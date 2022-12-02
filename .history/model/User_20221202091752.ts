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

    public setPassword(password: string) {
        this.password = password;
    }
    
    toString() {
        return 'ID: ' + this.id + ;
    }
}