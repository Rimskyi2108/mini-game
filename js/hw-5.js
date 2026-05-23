// Задание 1

// Через тернарный оператор и стрелочную функцию:

// const min = (a, b) => a < b ? a : b;                   //return есть, так как в одну строку
//     
// 



// if else

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(min(8, 4));
// console.log(min(6, 6));
// console.log(min(10, 20));


// Задание 2

// function checkEvenOdd(n) {
//     if (n % 2 === 0) {
//         return 'Число чётное';
//     } else { 
//         return 'Числе нечётное';
//     }
// }

// console.log(checkEvenOdd(4));  
// console.log(checkEvenOdd(7));  


// Залание 3

//    function getSquare(n) {        // не возвращает значение
//     console.log(n * n);
// }

// printSquare(5);  
// printSquare(10);



//  function getSquare(n) {             // Возвразает значение  
//     return n ** 2;
// }

// let result = getSquare(4);
// console.log(result);

// Задание 4

// function checkAge() {
//     let age = Number(prompt('Сколько вам лет?'));

//     if (age < 0) {
//         alert('Вы ввели неправильное значение');
//     } else if (age >= 0 && age <= 12) {
//         alert('Привет, друг!');
//     } else if (age >= 13) {
//         alert('Добро пожаловать!'); 
//     }
// }

// checkAge();


// Задание 5

// function multiplyIfNumbers(a, b) {  
//     let num1 = Number(a);
//     let num2 = Number(b);

//     if (isNaN(num1) || isNaN(num2)) {
//         return 'Одно или оба значения не являются числом';
//     } else {
//         return num1 * num2;
//     }
// }

// console.log(multiplyIfNumbers(5, 3));      
// console.log(multiplyIfNumbers('4', 2));  
// console.log(multiplyIfNumbers('7', '8'));  
// console.log(multiplyIfNumbers('привет', 5)); 
// console.log(multiplyIfNumbers(10, 'abc'));   
// console.log(multiplyIfNumbers('как', 'дела'));


// Задание 6

// function cubeNumber() {
//     let input = prompt('Введите число');
//     let n = Number(input);
    
//     if (isNaN(n)) {
//         return 'Переданный параметр не является числом';
//     } else {
//         let cubed = n ** 3;
//         return `${n} в кубе равняется ${cubed}`;
//     }
// }

// console.log(cubeNumber());


// Задание 7

const circle1 = {
    radius: 5,

    getArea: function() {
        return Math.PI * this.radius ** 2;
    },

    getPerimeter: function() {  
        return 2 * Math.PI * this.radius
    }
};

const circle2 = {
    radius: 10,
    
    getArea: function() {
        return Math.PI * this.radius ** 2;
    },
    
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());



