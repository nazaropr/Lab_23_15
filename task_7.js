const mod = require('custom_module');

//Додавання порту в колекцію
let p1 = mod.add_Port("Port_1");
let p2 = mod.add_Port("Port_2");
let p3 = mod.add_Port("Port_3");

// Список всіх портів в колекції
mod.get_Port_List();

// Видалення порту з колекції
console.log("Видалення порту: Port_2");
mod.remove_Port("Port_2");

// Список портів в колекції
mod.get_Port_List();

// Редагування порту в колекції
console.log("Зміна порту: Port_3");
mod.edit_Port("Port_3", "New Port name");

// Список портів в колекції
mod.get_Port_List();

// Пошук одного порту в колекції
let port1 = mod.find_port("Port_1");
console.log(`Пошук порту Port_1: ${port1 !== -1 ? "знайдено" : "не знайдено"}`);
let port2 = mod.find_port("Port_2");
console.log(`Пошук порту Port_2: ${port2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////

// Додавання корабля в порт
let s1 = mod.addShip("ship1", port1);
let s2 = mod.addShip("ship2", port1);
let s3 = mod.addShip("ship3", port1);
let s4 = mod.addShip("ship4", port1);

// Список кораблів у порту
mod.getShips(port1);

// Видалення корабля з порту
console.log("Видалення корабля: ship1");
mod.removeShip("ship1", port1);

// Список всіх кораблів у порту
mod.getShips(port1);

// Редагування корабля у порту
console.log("Редагування корабля: ship2");
mod.editShip("ship2", port1, "new_ship");

// Список кораблів у порту
mod.getShips(port1);

// Пошук кораблів
let ship1 = mod.findShip("ship3", port1);
console.log(`Пошук корабля - ship3: ${ship1 !== -1 ? "знайдено" : "не знайдено"}`);
let ship3 = mod.findShip("new_ship", port1);
console.log(`Пошук корабля - new_ship: ${ship3 !== -1 ? "знайдено" : "не знайдено"}`);
let ship4 = mod.findShip("ship4", port1);
console.log(`Пошук корабля - ship4: ${ship4 !== -1 ? "знайдено" : "не знайдено"}`);
let ship2 = mod.findShip("ship1", port1);
console.log(`Пошук корабля - ship1: ${ship2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////

// Додавання пристані до порту
mod.addWharf("wharf1", port1);
mod.addWharf("wharf2", port1);
mod.addWharf("wharf3", port1);

// Список пристаней у порті Port_1
mod.getWharf(port1);

// Видалення пристані з порту
console.log("Видалення пристані: wharf1");
mod.removeWharf("wharf1", port1);

// Список пристаней у порту Port_1
mod.getWharf(port1);

// Пошук однієї пристані в порту
let wharf1 = mod.findWharf("wharf1", port1);
console.log(`Пошук пристані wharf1: ${wharf1 !== -1 ? "знайдено" : "не знайдено"}`);
let wharf2 = mod.findWharf("wharf2", port1);
console.log(`Пошук пристані wharf2: ${wharf2 !== -1 ? "знайдено" : "не знайдено"}`);
let wharf3 = mod.findWharf("wharf3", port1);
console.log(`Пошук пристані wharf3: ${wharf3 !== -1 ? "знайдено" : "не знайдено"}`);


//Прибуття корабля у пристань
mod.addShipWharf(ship1.name, port1, wharf1);
mod.addShipWharf(ship3.name, port1, wharf3);
mod.addShipWharf(ship4.name, port1, wharf3);

// Список всіх кораблів у пристані Wharf3
mod.getShipsWharf(wharf3);

//Відбуття корабля від пристані
console.log(`Відбуття корабля: ${ship3.name}`);
mod.removeShipWharf(ship3.name, port1, wharf3);

// Список всіх кораблів у пристані Wharf3
mod.getShipsWharf(wharf3);