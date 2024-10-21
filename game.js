function game1() {   
  const a = Math.floor(Math.random() * 100 + 1);
  let num = 0; // объявить переменную до цикла
  do {
      num = prompt('Игра: отгадай число от 1 до 100', 0);
      if (num == a) {
          alert('Угадал!');
      } else if (num > a) {
          alert('Твой ответ больше задуманного числа! Попробуй еще!', '');
      } else if (num < a) {
          alert('Твой ответ меньше задуманного числа! Попробуй еще!', '');
      }
  } while (num != a && num);
}


function game2() {

    function getRandomInt(min, max) {
       min = Math.ceil(min);
       max = Math.floor(max);
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }
 
    let ranOper = getRandomInt(1, 4);
    console.log(ranOper);
    let a = getRandomInt(1,10);
    console.log(a);
    let b = getRandomInt(1,10);
    console.log(b);
    let d = 0;
    let с = 0;
 
 
    if (ranOper == 1) {
       d = prompt("Сколько будет " + a + " + " + b + "?"), c = a + b;
    };
 
    if (ranOper == 2) {
       d = prompt("Сколько будет " + a + " - " + b + "?"), с = a - b;
    };
 
    if (ranOper == 3) {
       d = prompt("Сколько будет " + a + " * " + b + "?"), с = a * b;
    };
 
    if (ranOper == 4) {
       d = prompt("Сколько будет " + a + " / " + b + "?"), c = a / b;
    };
 
    if (d == c) {
       alert('Верно');   
       } else {
        alert('Неверно')};
}


function game3() {
    let textUser = prompt("Введите текст");
    let textGame = textUser.split('').reverse().join('');
    alert(textGame);    
}


function game4() {
    
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: [" 1. Красный", " 2. Синий", " 3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: [" 1. Шесть", " 2. Семь", " 3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: [" 1. Четыре", " 2. Пять", " 3. Шесть"],
            correctAnswer: 2
        }
    ];   
    
    let quizQuestion = 0; // Вопрос
    let quizOptons = 0;   // Варианты ответа
    let quizAnswer = 0;   // Правильный ответ
    let userAnswer = 0;   // Ответ игрока
    let trueQuestion = 0; // Кол-во правильных ответов 
    
    for (let i = 0; i < 3; i++) {
        quizQuestion = (quiz[i].question); quizOptons = (quiz[i].options); quizAnswer = (quiz[i].correctAnswer);
        userAnswer = Number(prompt(quizQuestion + " " + quizOptons));
            if  (quizAnswer === userAnswer) {
                trueQuestion++
            }         
    }
    alert ("Правильных ответов: " + trueQuestion);
    
}


function game5() {

    let userSelection = prompt('Ваш выбор(камень,ножницы,бумага):'); // Выбор игрока

    let num = Math.floor(Math.random() * 3);
    let choice = ['камень', 'ножницы', 'бумага'];
    let pcSelection = choice[num] // Выбор компьютера

    let upUserSelection = userSelection.toUpperCase(); // Сделал буквы по больше для 
    let upPcSelection = pcSelection.toUpperCase();   //   удобства просмотра

    alert(`Ваш выбор: ${upUserSelection} <> Выбор компьютера: ${upPcSelection}`); 

    if (userSelection === pcSelection) {
        alert('Ничья!');
        } else if (
        (userSelection === 'камень' && pcSelection === 'ножницы') ||
        (userSelection === 'ножницы' && pcSelection === 'бумага') ||
        (userSelection === 'бумага' && pcSelection === 'камень')
        ) {
        alert('Вы победили!😁');} else {
        alert('Компьютер победил!');}
}
