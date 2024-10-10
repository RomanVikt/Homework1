// Задание 1

/*let task = "js";
console.log(task);
let answer = task.toUpperCase();
console.log(answer);*/

// Задание 2

/*function filter(arr, str) {
   let result = [];
   for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase().startsWith(str.toLowerCase())) {
        result.push(arr[i]);
        }
    }
    return result;
}

console.log(filter(['JavaScript', 'Java', 'Python'], 'ja'));*/

// Задание 3

/*let number = 32.58884;

console.log("Меньшее целое -", Math.floor(number)); 
console.log("Большее целое -", Math.ceil(number)); 
console.log("Ближайшее целое -", Math.round(number));*/

// Задание 4

/*console.log("Минимальное -", Math.min(52, 53, 49, 77, 21, 32)); 
console.log("Максимальное -", Math.max(52, 53, 49, 77, 21, 32));*/

// Задание 5

/*function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log("Случайное число =", getRandomNumber());*/


// Задание 6

/*function getRandomNumber(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random() * num));
    }
    return arr;
}

console.log(getRandomNumber(10));*/

// Задание 7

/*function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Случайное число =", getRandomNumber(10, 20));*/

// Задание 8

/*let myDate = new Date();

let fullDate = myDate.getDate() + "." + myDate.getMonth() + "." + myDate.getFullYear();

console.log(fullDate);*/

// Задание 9

/*let currentDate = new Date();
let firstDate = currentDate.getDate() + "." + currentDate.getMonth() + "." + currentDate.getFullYear();
console.log(firstDate);

let currentDate2 = new Date(currentDate.setDate(currentDate.getDate() + 73));
let secondsDate = currentDate2.getDate() + "." + currentDate2.getMonth() + "." + currentDate2.getFullYear();
console.log(secondsDate);*/

// Задание 10

/*function formatDate(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const dayOfWeek = days[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `
    Дата : ${day} ${months[month]} ${year} - это ${dayOfWeek}.
    Время : ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));*/