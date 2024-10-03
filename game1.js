  let min = 1;
  let max = 100;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    
  alert (randomNum); //Загаданное число
    
  let userNum = +prompt("Угадай число от 1 до 100! Укажи свой вариант:");
    
  if (userNum > 100 || userNum < 1) {
    alert("Введите коректное число");
    }
  else if (userNum > randomNum) {
    alert("Загаданное число меньше"); 
    }
  else if (userNum < randomNum) {
    alert("Загаданное число больше");
    }
  else alert("Угадал.Молодец!");
    
