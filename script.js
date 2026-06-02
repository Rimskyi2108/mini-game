// Игра 1. Угадай число

function startGuessGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;                                       // Генерация числа от 1 до 100
    let attempts = 0;
    let guessed = false;

    alert('Я загадал число от 1 до 100. Попробуй угадать!');                                        // Приветствие

    while (!guessed) {                                                                              // Цикл игры
        let userGuess = prompt('Введите ваше число (от 1 до 100):');

        if (userGuess === null) {                                                                   //  Если  нажал "Отмена"
            alert('Игра отменена. Приходи ещё!');
            return;
        }

        userGuess = Number(userGuess);                                                              // Преобразование в число
        attempts++;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {                                 // Проверка на корректность ввода
            alert('Ошибка! Введите число от 1 до 100!');
            attempts--;
            continue;
        }

        if (userGuess === randomNumber) {                                                           // Сравниваем с загаданным числом            
            alert(`ПОБЕДА! Вы угадали число ${randomNumber}! Количество попыток: ${attempts}`);
            guessed = true;
        } else if (userGuess < randomNumber) {
            alert(`Число ${userGuess} — МЕНЬШЕ загаданного. Попробуй число побольше!`);
        } else {
            alert(`Число ${userGuess} — БОЛЬШЕ загаданного. Попробуй число поменьше!`);
        }
    }
}


// Игра 2. Простая арифметика

function startArithmeticGame() {
    let score = 0;                                   // счётчик правильных ответов
    let total = 5;                                   // всего вопросов
    
    alert(`Арифметическая игра! \nТебе будет задано ${total} вопросов. \nПоехали!`);

    for (let i = 1; i <= total; i++) {                                          // цикл на 5 вопросов   

        const num1 = Math.floor(Math.random() * 10) + 1;                              // Генерируем случайные числа от 1 до 10
        const num2 = Math.floor(Math.random() * 10) + 1;

        const operations = ['+', '-', '*', '/'];
        const operation = operations[Math.floor(Math.random() * operations.length)];         // Выбираем случайную операцию

        let correctAnswer;
        if (operation === '+') {
            correctAnswer = num1 + num2;
        } else  if (operation === '-') {
            correctAnswer = num1 - num2;
        } else if (operation === '*') {
            correctAnswer = num1 * num2;
        } else if (operation === '/') {
            correctAnswer = num1 / num2;
            // округляем до 2х знаков после деления
            correctAnswer = Math.round(correctAnswer * 100) / 100;
        }

        let userAnswer = prompt(`Вопрос ${i} из ${total}: ${num1} ${operation} ${num2} = ?`);            // Задаём вопрос

        if (userAnswer === null) {                                                              // Проверка на отмену
            alert(`Игра прервана! Правильных ответов: ${score} из ${i-1}`);
            return;
        } 

        userAnswer = Number(userAnswer);                                      // Преобразуем в число

        if (userAnswer === correctAnswer) {                                                // Сравниваем ответы
            alert(`Верно! ${num1} ${operation} ${num2} = ${correctAnswer}`);
            score++;
        } else {
            alert(`Неверно! ${num1} ${operation} ${num2} = ${correctAnswer} \n Твой ответ: ${userAnswer}`);
        }
    }

    alert(`Игра окончена! \n\n Правильных ответов: ${score} из ${total} \n Процент правильных ответов: ${(score / total * 100)}%`);         // Итог
}


// Игра 3. Переверни текст

function reverseText() {
    let userText = prompt('Введите текст, который нужно перевернуть:');
    

    if (userText === null) {
        alert('Игра окончена');
    } else if (userText.trim() === '') {
        alert('Вы не ввели текст! Попробуйте ещё раз.');
        return;
    } else {
        const reversedText = userText.split('').reverse().join(''); 
        alert(`Оригинальный текст:  ${userText}\n\nПеревёрнутый текст:  ${reversedText}`);
    }
}


// Игра 4. Камень, ножницы, бумага

function startRPSGame() {
    const options = ["камень", "ножницы", "бумага"];
    let userScore = 0;
    let computerScore = 0;
    let round = 1;

    alert("ИГРА 'КАМЕНЬ, НОЖНИЦЫ, БУМАГА' ДО 3 ПОБЕД!");

    while (userScore < 3 && computerScore < 3) {
        let userChoice = prompt(`РАУНД ${round}\nСчёт: ${userScore} : ${computerScore}\n\nВведите: камень, ножницы, бумага`);

        if (userChoice === null) {
            alert('Игра отменена!');
            return;
        }

        userChoice = userChoice.toLocaleLowerCase().trim();

        if (!options.includes(userChoice)) {
            alert("Ошибка! Введите: камень, ножницы или бумага");
            continue;
        }

        const computerChoice = options[Math.floor(Math.random() * 3)];

        if (userChoice === computerChoice) {
            alert(`Ничья! ${userChoice} = ${computerChoice}`);
        } else if (
            (userChoice === "камень" && computerChoice === "ножницы") ||
            (userChoice === "ножницы" && computerChoice === "бумага") ||
            (userChoice === "бумага" && computerChoice === "камень")
        ) {
            alert(`Вы выиграли! ${userChoice} победил ${computerChoice}`);
            userScore++;
        } else {
            alert(`❌ Компьютер выиграл! ${computerChoice} победил ${userChoice}`);
            computerScore++;
        }

        round++; 
    }

    if (userScore === 3) {
        alert(`ПОБЕДА!\nФинальный счёт: ${userScore} : ${computerScore}`);
    } else {
        alert(`ПОРАЖЕНИЕ!\nФинальный счёт: ${userScore} : ${computerScore}`);
    }
}


// Игра 5. Простая викторина

function startQuiz() {
    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа (Синий)
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2 Семь", "3. Восемь"],
            correctAnswer: 2 // номер правильного ответа (Семь)
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2 // номер правильного ответа (Пять)
        }
    ];

    let correctCount = 0;

    alert('Добро пожаловать в викторину!\n\nВам будет задано ' + quiz.length + ' вопроса.\n\nДля ответа введите номер варианта (1, 2 или 3).');

    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i];

        let questionText = `Вопрос ${i + 1} из ${quiz.length}:\n\n`;
        questionText += `${question.question}\n\n`;
        questionText += question.options.join(`\n`);
        questionText += `\n\nВведите номер ответа (1, 2 или 3):`;

        let userAnswer = prompt(questionText);

        if (userAnswer === null) {
            alert('Викторина прервана! До свидания.');
            return;
        }

        userAnswer = Number(userAnswer);

        if (userAnswer === question.correctAnswer) {
            alert('Правильно!');
            correctCount++;
        } else {
            let correctText = question.options[question.correctAnswer - 1];
            alert(`Неправильно!\n\nПравильный ответ:  ${correctText}`);
        }
    }

    alert(`Викторина окончена!\n\nПравильных ответов: ${correctCount} из ${quiz.length}\nПроцент: ${((correctCount / quiz.length * 100)).toFixed(1)}%`);
}


// Игра 6. Генератор случайных цветов

function changeBackgroundColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    const gameCard = document.getElementById('game-6');
    gameCard.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}