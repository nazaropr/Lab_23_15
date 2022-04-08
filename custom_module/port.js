// Клас - порт
class Port {

    constructor (name) {
        this.name = name;
        this.ships = [];
        this.wharfs = [];

        if (typeof name === 'undefined')    { this.name = "Невідомий порт"; }
    }

}

// Список усіх портів
let port_list = new Array;

// Знайти порт в колекції
function find_port (name) {
    for (let port of port_list) {
        if (name === port.name) {
            return port;
        }
    }

    return -1;
}

// Додавання нового порту
function add_Port (name) {

    let port = new Port(name);
    port_list.push(port);

    return port;

}

// Видалити порт з колекції
function remove_Port (name) {

    for (let id = 0; id < port_list.length; id++) {

        let port = port_list[id];

        if (port.name === name) {
            port_list.splice(id, 1);
            return 1; }

    }

    return -1;

}

// Редагувати порт в колекції
function edit_Port (name, new_name) {

    for (let id = 0; id < port_list.length; id++) {

        let port = port_list[id];

        if (port.name === name ) {
            port_list[id].name = new_name;
            return 1; }

    }

    return -1;

}

// Отримати список портів
function get_Port_List() {

    console.log("\n" + "Список усіх портів:");

    for (let id = 0; id < port_list.length; id++) {

        let p = port_list[id];
        console.log(`Назва порту: ${p.name}`);

    }

    console.log();

    return port_list;

}

// Експортуємо функції
exports.find_port = find_port;
exports.add_Port = add_Port;
exports.remove_Port = remove_Port;
exports.edit_Port = edit_Port;
exports.get_Port_List = get_Port_List;