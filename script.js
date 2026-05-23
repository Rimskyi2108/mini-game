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