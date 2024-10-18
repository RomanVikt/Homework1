/* Первое задание */

let h = 10;
alert(h);
h = 20;
alert(h);

/* Второе задание */

const firstYear = 2007;
alert(firstYear);

/* Третье задание */

const creatorName = 'Brendan Eich';
alert(creatorName);

/* Четвертое задание */

let ten = 10;
let two = 2;
alert(ten + two);
alert(ten - two);
alert(ten * two);
alert(ten / two);

/* Пятое задание */

let result = 2 ** 5;
alert(result);

/* Шестое задание */

let k = 9;
let l = 2;
let ostatok = 9 % 2;
alert(ostatok);

/* Седьмое задание */

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num = num++;
num = num--;
alert(num);

/* Восьмое задание */

let age = prompt("Сколько вам лет?");
alert(age);

/* Девятое задание */

const user = {
    name: "Jonny",
    age: 34,
    isAdmin: true
}

/* Десятое задание */

const userName = prompt("Как тебя зовут?");
alert("Привет , " userName , " !");  


/* Задания по условному ветвлению */

/* Первое задание */

let password = 'пароль'

let question = prompt('Введите пароль');

if (question == password) {
  alert('Пароль введен верно');
} else {
  alert('Пароль введен неправильно');
} 

/* Второе задание */

let с = 7;

if (с > 0 && с <10) {
alert('Верно');
} else {
alert('Неверно');
}

/* Третье задание */

let d = Number(prompt('Введите цифру больше ста'));

let e = Number(prompt('Еще одну'));

if ( d>100 || e>100) {
  alert('верно');
} else {
 alert('неверно');
} 

/* Четвертое задание */

let a = '2';

let b = '3';

// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
a = Number( a );

b = Number( b ); 

alert( a + b );

/* Пятое задание */

let monthNumber = prompt("Введите порядковый номер месяца");
switch (monthNumber) {
  case '1':
    alert('Зимний месяц');
    break;
  case '2':
    alert('Зимний месяц');
    break;
 case '12':
    alert('Зимний месяц');
    break;    
  case '3': 
    alert('Весенний месяц');
    break;
  case '4': 
    alert('Весенний месяц');
    break;
  case '5': 
    alert('Весенний месяц');
    break;  
  case '6':
    alert('Летний месяц');
    break;
  case '7':
    alert('Летний месяц');
    break;
  case '8':
    alert('Летний месяц');
    break;
  case '9':
    alert('Осенний месяц');
    break;
  case '10':
    alert('Осенний месяц');
    break; 
  case '11':
    alert('Осенний месяц');
    break;      
default:
    alert('Ошибка ввода');
}

/* Задание по циклу */

/* Задание первое */

for(i=0;i<2;i++) {alert('Привет')  
}

/* Задание второе */

for(i=1;i<6;i++) {alert(i)  
} 
alert('Расчет окончен')

/* Задание третье */

for(i=7;i<23;i++) {alert(i)  
} 
alert('Расчет окончен')

/* Задание четвертое */

const obj = {
  'Коля' : '200 долларов',
  'Вася' : '300 долларов',
  'Петя' : '400 долларов'
}

for (let key in obj) {
  alert(`${key}: ${obj[key]}`);
}

alert('Итого: 900 долларов')

/* Задание пятое */

let num1=0;
for (let n=1000;n>50;n=n/2) {
   alert(n);
   num1++;
};
alert("Количество циклов равно = " + num1);

/* Задание шестое */

for (let n=3;n<=31;n=n+7) {
  alert("Сегодня пятница, " + n + "-е число. Необходимо подготовить отчет.");
  };

  