import { ComputerManager } from "./service/ComputerManager";
import { ServiceManager } from "./service/ServiceManager";
import { UserManager } from "./service/UserManager";
import { Computer } from "./model/Computer";

let input = require("readline-sync");
let cyberGame = new ComputerManager;
let may1 = new Computer('May 1', 'offline', 0, 0);
let may2 = new Computer('May 2', 'offline', 0, 0);
let may3 = new Computer('May ', 'offline', 0, 0);
let may4 = new Computer('May 2', 'offline', 0, 0);
let may5 = new Computer('May 2', 'offline', 0, 0);