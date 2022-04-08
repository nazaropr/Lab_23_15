//3. Написати функцію, яка обчислює найбільший спільний дільник двох додатних чисел

function get_Greatest_Common_Divisor(a, b) {
    if (a === 0)
        return b;

    while (b !== 0) {
        if (a > b)
            a -= b;
        else
            b -= a;
    }

    return a;
}

console.log(`НСД чисел 84 та 126 = ${get_Greatest_Common_Divisor(13, 6)}`);
console.log(`НСД чисел 37 та 16 = ${get_Greatest_Common_Divisor(37, 16)}`);
console.log(`НСД чисел 128 та 4096 = ${get_Greatest_Common_Divisor(128, 4096)}`);





