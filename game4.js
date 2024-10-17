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