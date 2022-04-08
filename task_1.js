//Реалізувати розбиття стрічки на слова у масив. Допустим є написання функцій.

function split() {
    let str = 'About: The World English Institute lessons will help you improve your English skills.';
    let mas = [];
    let j = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            j++;
        } else {
            mas[j] ? mas[j] += str[i] : mas[j] = str[i];

        }
    }
    console.log(mas);
    return mas;
}

let Result = split();
console.log("Результат:");
console.log(Result);