class Wharf {
    constructor(name) {
        this.name = name;
        this.shipsOnWharps = [];
        if (typeof name === 'undefined') {

            this.name = "Невідома пристань";

        }
    }
}
//Пошук пристані
function findWharf(name, port) {
    for (let id = 0; id < port.wharfs.length; id++){
        let wharf = port.wharfs[id];
        if (name === wharf.name){
           return wharf;
        }
    }
    return -1;
}

//Додавання пристані
function addWharf(name, port) {
    let wharf = new Wharf(name,port)
    port.wharfs.push(wharf);
    return wharf;
}

//Видалення пристані
function removeWharf(name, port) {
    let wharf = findWharf(name, port);
    if (wharf === -1){
        return -1;
    }
    let id = port.wharfs.indexOf(wharf);
    port.wharfs.splice(id,1);
    return 1;
}

//Список пристаней у порту
function getWharf(port) {
    console.log("\n" + `Список пристаней у порті ${port.name}`);
    for (let id = 0; id < port.wharfs.length; id++){
        let wharf = port.wharfs[id];
        console.log(`Назва пристані: ${wharf.name}`);
    }
    console.log();
    return port.wharfs;
}

exports.findWharf = findWharf;
exports.addWharf = addWharf;
exports.removeWharf = removeWharf;
exports.getWharf = getWharf;
