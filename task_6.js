//6. Написати реалізацію сортування масиву об’єктів User за значенням поля name

let arr=[
    {name:'Петро', year:1995},
    {name:'Микола', year:2001},
    {name:'Оля', year:1999}
];

function sortName(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

arr.sort(sortName('name'));
console.log(arr);