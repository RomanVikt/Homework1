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
  } while (num != a && num); // иначе здесь она не видна
}