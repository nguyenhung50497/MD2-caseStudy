import { User } from "../model/User";

export class UserManager {
    listUsers: User[] = [];

    addUser(user: User) {
        return this.listUsers.push(user);
    }
    editUser(index: number, user: User) {
        return this.listUsers[index] = user;
    }
    removeUser(index: number, user: User) {
        return this.listUsers.splice(index, 1);
    }
}