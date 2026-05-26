//  Задание 1

// const people = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];

// console.log(people.sort((a, b) => a.age - b.age));


//  Задание 2

// function isPositive(num) {                       // временный параметр
//     return num > 0;                              // условие
// }

// function isMale(person) {                        // временный параметр
//     return person.gender === 'male';             // условие
// }

// function filter(arr, ruleFunction) {             // временные параметры массива и функции
//     const output = [];

//     for (let i = 0; i < arr.length; i++) {       // универсальный цикл для первого массива с числами болльше 0 и для второго массива с мужчинами
//         if (ruleFunction(arr[i])) {
//             output.push(arr[i]);                 // добавляем  в новый массив
//         }
//     }

    // return output;                               // создние нового массива
// }

// console.log(filter([3, -4, 1, 9], isPositive));    // элементы первого  массива для фильтрации, вызываем функцию с условием > 0 и выводим в консоль

// const people = [                                   // элементы второго массива для фильтрации
//    {name: 'Глеб', gender: 'male'},
//    {name: 'Анна', gender: 'female'},
//    {name: 'Олег', gender: 'male'},
//    {name: 'Оксана', gender: 'female'}
// ];

// console.log(filter(people, isMale));               // вызываем функцию с условием что элемент = мужчина и выводим в консоль



//  Задание 3

// let count = 0;

// const timer = setInterval(() => {
//     count++;
//     console.log(new Date());
// }, 3000);

// setTimeout(() => {
//     clearInterval(timer);
//     console.log(`Всего выведено дат: ${count}`);
//     console.log('30 секунд прошло');
    
// }, 30000);

//  Задание 4

// function delayForSecond(callback) {
//     setTimeout(callback, 1000);
// }

// delayForSecond(function () {
//     console.log('Привет, Глеб!');
    
// });

//  Задание 5

// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if(cb) { cb(); }
//     }, 1000);
// }

// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// delayForSecond(function() {
//     sayHi('Глеб');
// });






