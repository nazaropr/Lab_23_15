const wharfGL = require('./wharf');
class Ship {

    constructor(name){
        this.name = name;
        if (typeof name === 'undefined') {

            this.name = "Невідомий корабель";

        }
    }
}

//Додавання корабля
function addShip(name, port){
    let ship = new Ship(name);
    port.ships.push(ship);

    return ship;
}

//Прибуття корабля до пристані
function addShipWharf (name, port, wharf) {
    if (wharfGL.findWharf(wharf.name, port) === -1) {
        return -1;
    }
    let ship = new Ship(name);
    wharf.shipsOnWharps.push(ship);
    return ship;
}

//Пошук корабля
function findShip(name, port) {
    for (let id = 0; id < port.ships.length; id++){
        let ship = port.ships[id];
        if (name === ship.name){
            return ship;
        }
    }
    return -1;
}

// Знайти корабель в пристані
function findShipWharf (name, port, wharf) {
    if (wharfGL.findWharf(wharf.name, port) === -1) {
        return -1;
    }
    for (let i = 0; i < wharf.shipsOnWharps.length; i++) {
        let ship = wharf.shipsOnWharps[i];
        if (name === ship.name) {
            return ship;
        }
    }
    return -1;
}

//Редагування корабля
function editShip(name, port, new_name) {

    let ship = findShip(name, port);
    if (ship === -1){
        return -1;
    }
    let id = port.ships.indexOf(ship);
    port.ships[id].name = new_name;

    return 1;
}

//Видалення корабля

function removeShip(name, port) {
    let ship = findShip(name, port);
    if (ship === -1){
        return -1;
    }
    let id = port.ships.indexOf(ship);
    port.ships.splice(id, 1);
    return 1;
}

//Відбуття корабля від пристані
function removeShipWharf (name, port, wharf) {
    if (wharfGL.findWharf(wharf.name, port) === -1) {
        return -1;
    }
    let ship = findShipWharf(name, port, wharf);
    if (ship === -1) {
        return -1;
    }
    let id = wharf.shipsOnWharps.indexOf(ship);
    wharf.shipsOnWharps.splice(id, 1);
    return 1;
}

//Отримати список кораблів в порту
function getShips(port) {
    console.log("\n" + `Список кораблів у порту: ${port.name}`);
    for (let id = 0; id < port.ships.length; id++){
        let ship = port.ships[id];
        console.log(`Назва корабля: ${ship.name}`);
    }
   console.log();
    return port.ships;
}

//Отримати список кораблів на пристані
function getShipsWharf (wharf) {
    console.log("\n" + `Список усіх кораблів у порту ${wharf.name}:`);
    for (let i = 0; i < wharf.shipsOnWharps.length; i++) {
        let ship = wharf.shipsOnWharps[i];
        console.log(`\tНазва корабля: ${ship.name}`);
    }
    console.log();
    return wharf.shipsOnWharps;
}


exports.addShip = addShip;
exports.findShip = findShip;
exports.editShip = editShip;
exports.removeShip = removeShip;
exports.getShips = getShips;
exports.getShipsWharf = getShipsWharf;
exports.addShipWharf = addShipWharf;
exports.removeShipWharf = removeShipWharf;
