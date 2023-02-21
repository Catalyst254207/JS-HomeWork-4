// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число

// for (let i = 0; i < 12; i++) {
//     if (i===0){
//         console.log('0 - это ноль');
//     } else if (i % 2 !== 0){
//         console.log(`${i} - нечетное число`);
//     } else {
//         console.log(`${i} - четное число`);
//     }    
// }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// numbers.splice(3,2);
// console.log(numbers);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

let array = [];
let min = 0;
let max = 9;
    for (let i = 0; i < 5; i++) {
        min = Math.ceil(min);
        max = Math.floor(max)
        array[i] = Math.floor(Math.random() * (max - min)) + min;   
}
console.log(array);


function count(array) {
let summ = 0;
    for (let i = 0; i < array.length; i++) {
        summ = summ + array[i];
    }
console.log(`Сумма всех элементов массива равна ${summ}`);
}

function minArraysNumber(array) {
    let minNum = Math.min(...array);
console.log(`Минимальный элемент массива равен ${minNum}`);
}

function searchNum(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 3) {
            console.log(`В массиве есть элемент со значением 3, под индексом ${i}.`);
        } else {
            console.log('В массиве нет элемента со значением 3.');
        }    
    }
}
count(array);
minArraysNumber(array);
searchNum(array);