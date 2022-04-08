// Підключаємо необхідні файли
const port = require('./port');
const ship = require('./ship');
const wharf = require('./wharf');

// Доступні операції з портом
exports.find_port = port.find_port;
exports.add_Port = port.add_Port;
exports.remove_Port = port.remove_Port;
exports.edit_Port = port.edit_Port;
exports.get_Port_List = port.get_Port_List;

// Доступні операції з кораблем
exports.addShip = ship.addShip;
exports.findShip = ship.findShip;
exports.editShip = ship.editShip;
exports.removeShip = ship.removeShip;
exports.getShips = ship.getShips;
exports.getShipsWharf = ship.getShipsWharf;
exports.addShipWharf = ship.addShipWharf;
exports.removeShipWharf = ship.removeShipWharf;

// Доступні операції з пристанями
exports.findWharf = wharf.findWharf;
exports.addWharf = wharf.addWharf;
exports.removeWharf = wharf.removeWharf;
exports.getWharf = wharf.getWharf;