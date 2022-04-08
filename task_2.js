//Написати функцію, яка посортує слово у алфавітному порядку
function sortByAlphabet(string) {
    return(string.split('').sort().join(''));
}

let str1 = "europe";
let str2 = "pen";
let str3 = "acer";

console.log (sortByAlphabet(str1))
console.log (sortByAlphabet(str2))
console.log (sortByAlphabet(str3))
