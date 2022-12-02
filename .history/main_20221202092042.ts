import { ComputerManager } from "./service/ComputerManager";
import { ServiceManager } from "./service/ServiceManager";
import { UserManager } from "./service/UserManager";
import { Computer } from "./model/Computer";
import { Service } from "./model/Service";
import { User } from "./model/User";

let input = require("readline-sync");
let cyberGame = new ComputerManager;
let serviceManager = new ServiceManager;
let userManager = new UserManager;

let may1 = new Computer('May 1', 'offline', new Date(), 0);
let may2 = new Computer('May 2', 'online', new Date(), 6);
let may3 = new Computer('May 3', 'offline', new Date(), 0);
let may4 = new Computer('May 4', 'offline', new Date(), 0);
let may5 = new Computer('May 5', 'online', new Date(), 10);

let snack = new Service('Snack', 2);
let sting = new Service('Sting', 1);
let noodles = new Service('Noodles', 3);

serviceManager.addService(snack);
serviceManager.addService(sting);
serviceManager.addService(noodles);

cyberGame.addComputer(may1);
cyberGame.addComputer(may2);
cyberGame.addComputer(may3);
cyberGame.addComputer(may4);
cyberGame.addComputer(may5);

function login() {
    console.log(`---------------------Đăng nhập---------------------`);
    let userName = input.question('UserName: ');
    let password = input.question('Password: ', {hideEchoBack: true});
    if (userName === 'admin' && password === 'admin') {
        main();
    }
    else {
        let choice = -1;
        console.log(`Sai mật khẩu hoặc tài khoản, đăng nhập lại
        1. Có
        0. Không`);
        choice = +input.question('Enter choice: ');
        if (choice === 1) {
            login();
        }
    }
}
login();

function main() {
    let mainMenu = `-----------------------CyberGame (2$/h)------------------------
    1. Danh sách máy
    2. Thêm máy mới
    3. Sửa máy
    4. Xóa máy
    5. Thêm dịch vụ
    6. 
    7. Tính tiền/Mua dịch vụ cho máy
    8. Quản lý tài khoản
    9. Doanh thu
    0. Thoát`
    let choice = -1;
    do {
        console.log(mainMenu);
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                showALl();
                break;
            case 2:
                addComputer();
                break;
            case 3:
                editComputer();
                break;
            case 4:
                deleteComputer();
                break;
            case 5:
                addService();
                break;
            case 6:
                
                break;
            case 7:
                bill();
                break;
            case 8:
                accountManager();
                break;
            case 9:
                break;
        }
    } while (choice !== 0)
}

// main();

function displayComp(arr: Computer[]) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += (i+1) + ': ' + arr[i].toString();
    }
    return str;
}

function showALl() {
    let choice = -1;
    do {
        console.log(displayComp(cyberGame.showAllComputers()));
        console.log(`
        1. Danh sách máy online
        2. Danh sách máy offline
        0. Main menu`);        
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                showOnline();
                break;
            case 2:
                showOffline();
                break;
        }
    } while (choice !== 0)
}

function showOnline() {
    console.log(displayComp(cyberGame.showOnlineComputers()));
}

function showOffline() {
    console.log(`--------------------------Chọn máy muốn bật--------------------------`);
    console.log(displayComp(cyberGame.showOfflineComputers()));
    console.log(`0. Thoát`);
    let choice = -1;
    do {
        choice = +input.question('Enter choice: ');
        if (choice === 0) {
            break;
        }
        else {
            cyberGame.showAllComputers()[choice-1].status = 'online';
            cyberGame.showAllComputers()[choice-1].time = new Date();
            cyberGame.showAllComputers()[choice-1].moneyService = 0;
            showOffline();
            break;
        }
    } while (choice !== 0)
}

function addComputer() {
    console.log(displayComp(cyberGame.showAllComputers()));
    console.log(`--------------------------Nhập máy mới--------------------------`);
    let name = input.question('Nhap ten may: ');
    let newComputer = new Computer(name, 'offline', new Date(), 0);
    cyberGame.addComputer(newComputer);
    console.log(displayComp(cyberGame.showAllComputers()));
}

function editComputer() {
    let choice = -1;
    console.log(`------------------------------Chọn máy cần sửa------------------------------------`);
    console.log(displayComp(cyberGame.showAllComputers()));
    console.log(`0. Thoát`);
    do {
        let listComputers = cyberGame.showAllComputers();
        choice = +input.question('Enter choice: ');
        if (choice === 0) {
            break;
        }
        else {
            let computer = listComputers[choice-1];
            console.log(`Máy cần sửa:
            ${choice}: ${computer.name} - Tình trạng: ${computer.status}`);
            let name = input.question('Nhap ten may moi: ');
            let newComputer = new Computer(name, computer.status, computer.time, computer.moneyService);
            cyberGame.editComputer(choice-1, newComputer);
            editComputer();
            break;
        }
    } while (choice !== 0)
}

function deleteComputer() {
    let choice = -1;
    do {
        console.log(`---------------------------Chọn máy muốn xóa-------------------------`);
        console.log(displayComp(cyberGame.showAllComputers()));
        console.log(`0. Thoát`);        
        choice = +input.question('Enter choice: ');
        if (choice === 0) {
            break;
        }
        else {
            console.log(`----------------Bạn có chắc chắn xóa máy----------------
            1. Có
            0. Không`);
            let choice2 = +input.question('Enter choice: ');
            if (choice2 === 0) {
                deleteComputer();
            }
            else {
                cyberGame.removeComputer(choice-1);
                deleteComputer();
                break;
            }
        }
    } while (choice !== 0)
}

function addService() {
    console.log(`-------------------------Thêm dịch vụ----------------------------`);
    let name = input.question('Nhap ten dich vu: ');
    let price = +input.question('Nhap gia dich vu: ');
    let newService = new Service(name, price);
    serviceManager.addService(newService);
}

function bill() {
    let choice = -1;
    do {
    console.log(`----------------------Chọn------------------------
    1. Tính tiền
    2. Mua dịch vụ
    0. Thoát`);
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                payBill();
                break;
            case 2:
                buyService();
                break;
        }
    } while (choice !== 0)
}

function payBill() {
    let choice = -1;
    console.log(`------------------------------Chọn máy cần tính tiền------------------------------------`);
    console.log(displayComp(cyberGame.showAllComputers()));
    console.log(`0. Thoát`);
    do {
        choice = +input.question('Enter choice: ');
        if (choice === 0) {
            break;
        }
        else {
            let sum = cyberGame.payBill(choice - 1);
            cyberGame.showAllComputers()[choice-1].status = 'offline';
            cyberGame.showAllComputers()[choice-1].time = new Date();
            cyberGame.showAllComputers()[choice-1].moneyService = 0;
            console.log('Thành tiền: ' + sum + '$');
            payBill();
            break;
        }
    } while (choice !== 0)
}

function buyService() {
    let choice = -1;
    console.log(`------------------------------Chọn máy cần mua------------------------------------`);
    console.log(displayComp(cyberGame.showAllComputers()));
    console.log(`0. Thoát`);
    do {
        choice = +input.question('Enter choice: ');
        if (choice === 0) {
            break;
        }
        else {
            let choice2 = -1;
            do {
                console.log(`--------------------------Chọn dịch vụ muốn mua-----------------------`);
            for (let i = 0; i < serviceManager.showAllServices().length; i++) {
                console.log(`
                ${i+1}: ${serviceManager.showAllServices()[i].name} - Giá: ${serviceManager.showAllServices()[i].price}$`);
            }
                choice2 = +input.question('Enter choice: ');
                if (choice2 === 0) {
                    break;
                }
                else {
                    let newService = serviceManager.showAllServices()[choice2-1];
                    cyberGame.showAllComputers()[choice-1].moneyService += newService.price;
                    buyService();
                    break;
                }
            } while (choice !== 0)
            break;
        }
    } while (choice !== 0)
}

function accountManager() {
    let choice = -1;
    do {
        console.log(`-----------------------Quản lý tài khoản----------------------
        1. Danh sách tk
        2. Tạo tk mới
        3. Sửa tk
        4. Xóa tk
        0. Thoát`);
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                showALlAccount();
                break;
            case 2:
                addAccount();
                break;
            case 3:
                break;
            case 4:
                deleteAccount();
                break;
        }
    } while (choice !== 0);
}

function showALlAccount() {
    for (let i= 0; i < userManager.showAllUsers().length; i++) {
        console.log(`${i+1}: ${userManager.showAllUsers()[i].toString()}`);
    }
}

function addAccount() {
    console.log(`---------------------------Tạo tài khoản-------------------------`);
    let id = userManager.showAllUsers().length + 1;
    let userName = input.question('Ten dang nhap: ');
    let password = input.question('Mat khau: ', {hideEchoBack: true});
    let newUser = new User(id, userName, password);
    userManager.addUser(newUser);
}

function deleteAccount() {
    
}