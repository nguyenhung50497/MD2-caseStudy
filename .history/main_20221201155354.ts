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

let may1 = new Computer('May 1', 'offline', 0);
let may2 = new Computer('May 2', 'online', 3);
let may3 = new Computer('May 3', 'offline', 0);
let may4 = new Computer('May 4', 'offline', 0);
let may5 = new Computer('May 5', 'online', 5);

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
                break;
            case 9:
                break;
        }
    } while (choice !== 0)
}

main();

function displayComp(arr: Computer[]) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        // str += `${i+1}: ${arr[i].name} - Trạng thái: ${arr[i].status} - Giờ chơi: ${arr[i].hours}h - Tổng tiền: ${arr[i].totalMoney}$\n`;
        str += (i+1) + ': ' + arr[i].toString();
    }
    return str;
}

function showALl() {
    console.log(displayComp(cyberGame.showAllComputers()));
    let choice = -1;
    do {
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
    console.log(displayComp(cyberGame.showOfflineComputers()));
}

function addComputer() {
    console.log(displayComp(cyberGame.showAllComputers()));
    console.log(`--------------------------Nhập máy mới--------------------------`);
    let name = input.question('Nhap ten may: ');
    let newComputer = new Computer(name, 'offline', 0);
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
            ${choice}: ${computer.name} - Tình trạng: ${computer.status} - Giờ chơi: ${computer.hours} - Tổng tiền: ${computer.totalMoney}`);
            let name = input.question('Nhap ten may moi: ');
            let newComputer = new Computer(name, computer.status, computer.hours);
            cyberGame.editComputer(choice-1, newComputer);
        }
        editComputer();
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
        let listComputers = cyberGame.showAllComputers();
        choice = +input.question('Enter choice: ');
        if (choice === 0) {
            break;
        }
        else {
            let computer = listComputers[choice-1];
            let sum = computer.getTotalMoney();
            cyberGame.showAllComputers()[choice-1].status = 'offline';
            cyberGame.showAllComputers()[choice-1].hours = 0;
            console.log(sum + '$');
        }
        payBill();
    } while (choice !== 0)
}

function buyService() {
    let choice = -1;
    do {
        console.log();
        
    for (let i = 0; i < serviceManager.showAllServices().length; i++) {
        console.log(`
        ${i+1}: ${serviceManager.showAllServices()[i].name} - Giá: ${serviceManager.showAllServices()[i].price}$`);
    }
    } while (choice !== 0)
}