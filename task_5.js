//5. Написати функцію, яка поверне кількість днів для заданого місяця та року.

function getDayFromMonthAndYear(m, y){
    let days = new Date(y, m, 0).getDate();
    return days;
}

let m1= 2, y1 = 2100;
let m2= 2, y2 = 2020;
let m3= 2, y3 = 2022;

console.log("Днів " + getDayFromMonthAndYear(m1, y1) + " у  " + m1 + "." + y1);
console.log("Днів " + getDayFromMonthAndYear(m2, y2) + " у  " + m2 + "." + y2);
console.log("Днів " + getDayFromMonthAndYear(m3, y3) + " у  " + m3 + "." + y3);