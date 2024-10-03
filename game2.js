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


if (ranOper == 1) {
   c = a + b && d == prompt("Сколько будет " + a + " + " + b + "?");
};

if (ranOper == 2) {
   c = a - b && d == prompt("Сколько будет " + a + " - " + b + "?");
};

if (ranOper == 3) {
   c = a * b && d == prompt("Сколько будет " + a + " * " + b + "?");
};

if (ranOper == 4) {
   c = a / b && d == prompt("Сколько будет " + a + " / " + b + "?");
};

if (d === c) {
   alert('Верно');   
   } else {
      alert('Ошибка')};

