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

let may1 = new Computer('May 1', 'offline', 0, 0);
let may2 = new Computer('May 2', 'online', 3, 6);
let may3 = new Computer('May 3', 'offline', 0, 0);
let may4 = new Computer('May 4', 'offline', 0, 0);
let may5 = new Computer('May 5', 'online', 5, 10);

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
    7. Tính tiền/Thêm dịch vụ cho máy
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
                editComputer();
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
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
        str += `${arr[i].name} - Trạng thái: ${arr[i].status} - Giờ chơi: ${arr[i].hours}h - Tổng tiền: ${arr[i].totalMoney}$\n`;
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

function editComputer() {
    let choice = -1;
    console.log(`------------------------------Chọn máy cần sửa------------------------------------`);
    console.log(displayComp(cyberGame.showAllComputers()));
    do 
}