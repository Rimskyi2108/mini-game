// Задание 1

// const arr = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

//     if (arr[i] === 10) {
//         break;
//     }
// }


// Задание 2

// const arr = [1, 5, 4, 10, 0, 3];
// const index = arr.indexOf(4);
// console.log(index);


// Задание 3

// const arr = [1, 3, 5, 10, 20];
// console.log(arr.join(' '));


// Задание 4

// const matrix = [];

// for (let i = 0; i < 3; i++) {
//     matrix[i] = [];
//     for (let j = 0; j < 3; j++) {
//         matrix[i][j] = 1;
//     }
// }

// console.log(matrix);


// Задание 5

// const arr = [1, 1, 1];
// arr.push(2, 2, 2);
// console.log(arr);


// Задание 6

// const arr = [9, 8, 7, 'a', 6, 5];
// const result = arr.sort().filter(item => item !== 'a');
// console.log(result);


// Задание 7

// const arr = [9, 8, 7, 6, 5];

// const userNumber = Number(prompt('Угадай число от 0 до 9:'));

// if (arr.includes(userNumber)) {
//     alert('Угадал');
// } else {
//     alert('Не угадал');
// }


// Задание 8

// const text = 'abcdef';
// const reversed = text.split('').reverse().join('');
// console.log(reversed);



// Задание 9

// const arr = [[1, 2, 3], [4, 5, 6]];
// const result = [...arr[0], ...arr[1]];
// console.log(result);


// Задание 10

// const arr = [3, 7, 2, 9 ,5];

// for (let i = 0; i < arr.length - 1; i++) {
//     const sum = arr[i] + arr[i + 1];
//     console.log(`${arr[i]} + ${arr[i + 1]} = ${sum}`);
// }


// Задание 11

// function squaresArray(arr) {                         // arr это произвольный параметр массива. num это поизволльный параметр элемента внутри массива. 12 задание аналогично
//     return arr.map(num => num ** 2);
// }

// const numbers = [1, 2, 3, 4, 5];
// const result = squaresArray(numbers);
// console.log(result);


// Задание 12

// const getLengths = (arr) => arr.map(word => word.length);

// const fruits = ['apple', 'banana', 'cherry', 'peach', 'watermelon'];
// const result = getLengths(fruits);
// console.log(result);  


// Задание 13

// const getNegativeNumbers = (arr) => arr.filter(num => num < 0);

// const numbers = [5, -2, 10, -7, 0, -3, 8];
// const negatives = getNegativeNumbers(numbers);
// console.log(negatives);


// Задание 14

// const originalArray = [];

// for (let i = 0; i < 10; i++) {
//     const randomNumber = Math.random() * 10;
//     const roundedNumber = Math.floor(randomNumber);
//     originalArray.push(roundedNumber);    
// }

// const evenNumbers = originalArray.filter(num => num % 2 === 0);

// console.log(`Исходный массив: [${originalArray}]`);
// console.log(`Чётные числа: [${evenNumbers}]`);


// Задание 15

const numbers = [];

for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    numbers.push(randomNumber);
}

console.log(`Исходный массив: [${numbers}]`);

const sum = numbers.reduce((a, b) => a + b, 0);

const average = (sum / numbers.length);

console.log(`Сумма: [${sum}]`);
console.log(`Среднее арифметическое: ${average}`);
