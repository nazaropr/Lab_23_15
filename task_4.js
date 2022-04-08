//4. Написати функцію, яка перемішає масив випадковим чином

let mas=[1,2,3,4,5,6,7,8,9];
mas.sort(function(){
    return Math.random()-0.5;
});

console.log(mas);