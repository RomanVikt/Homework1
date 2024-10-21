 /* Задание первое */

 function n1(a, b) {  
    if (a<b) {
        return(a);
        } else {
        return(b);
        }
  }
 
  /* Задание второе */
 
  function n2(c) {
     if (с % 2 === 0) {
       return 'Число четное';
    } else {
       return 'Число нечетное';
    }
  }
  
   /* Задание третье */ 
   
  function n3(d) {
    const d = +prompt("Введи число которое нужно возвести в квадрат:");
 
    return d ** 2;
  }
 
     /* Задание четвертое */
 
 function n4(age) {
    let age = +prompt('Сколько тебе лет?');
 
    if (age < 0) {
       alert('Вы ввели неправильное значение');
    } else if (age <= 12) {
       alert('Привет, друг!');
    } else {
       alert('Добро пожаловать!'); 
    }
 }
 
     /* Задание пятое */
 
 function n5(f, g) {
 
    if (isNaN(f) || isNaN(g)) {
       return 'Одно или оба значения не являются числом';
    } else {
       return f * g;
    }
 }
 
      /* Задание шестое */
 
 function n6() { 
    let h = prompt("Какое число возвести в квадрат?");
 
    if (isNaN(h)) {
       return 'Переданный параметр не является числом';
    } else {
       return '${h} в кубе равняется ${h ** 3}';
    }
 }
 
      /* Задание седьмое */
 
 function getArea() {
    return Math.PI * this.radius ** 2;
 }
 
 function getPerimeter() {
    return 2 * Math.PI * this.radius;
 }
 
 const circle1 = {
    radius: 10,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
 }
 
 const circle2 = {
    radius: 20,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
 }   