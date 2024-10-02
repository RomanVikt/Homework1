// Задание 1

/* const mass1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < mass.length; i++) {
   console.log(mass1[i]);
   if (mass[i] === 10) {
      break;
   }
} */


// Задание 2

/* const mass2 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < mass2.length; i++) {
      if (mass2[i] === 4) {
         console.log(i);
      break;
   }
} */

// Задание 3

/* const mass3 = [1, 3, 5, 10, 20];
console.log(mass3.join(' ')); */

// Задание 4

/* const mass4 = []; 
for (let i = 0; i < 3; i ++)  {
   const mass42 = [];
   for (let i = 0; i < 3; i++) {
      mass42.push(1);
   }
   mass4.push(mass42);
}   

console.log(mass4); */

// Задание 5


/* const mass5 = [1, 1, 1];
mass5.push(2, 2, 2);
console.log(mass5); */

// Задание 6

/* const mass6 = [9, 8, 7, 'a', 6, 5];
mass6.sort();
console.log(mass6);
mass6.pop();
console.log(mass6); */

// Задание 7

/* const mass7 = [9, 8, 7, 6, 5];
let d = +prompt("Назовите число ");
if (mass7.includes(d)) {
   alert('Угадал');
} else {
   alert('Не угадал');   
} */

// Задание 8

/* let mass8 = 'abcdef';
mass8 = mass8.split('');
console.log(mass8);
mass8.reverse();
mass8 = mass8.join('');
console.log(mass8); */

// Задание 9

/* const mass9 = [[1, 2, 3], [4, 5, 6]];
console.log(mass9);
const mass92 = [];

for (let i = 0; i < mass9.length; i++) {
   mass92.push(...mass9[i]);
}
console.log(mass92); */

// Задание 10

/* const mass10 = [9, 8, 7, 6, 5, 9, 8, 7, 6, 5];
for (let i = 0; i < mass10.length; i++) {
   if (mass10[i + 1]) {
      console.log(mass10[i] + mass10[i + 1]);
   }
} */

// Задание 11

/* function fun11(mass11) {
   return mass11.map(item => item ** 2);
}

console.log(fun11([1, 2, 3, 4])); */

// Задание 12

/* function fun12(mass12) {
   return mass12.map(item => item.length);
}
console.log(fun12(['hello', 'jony'])); */

// Задание 13

/* function fun13(mass13) {
   return mass13.filter(item => item < 0);
}

console.log(fun13([7, -9, 7, 6, -5, 9, 8, 7, -6, 5])) */

// Задание 14

/* function fun14() {
   return Math.floor(Math.random() * 10);
}
const mass14 = [];
for (let i = 0; i < 10; i++) {
   mass14.push(fun14());
}

const mass142 = [];
for (let i = 0; i < mass14.length; i++) {
   if (mass14[i] % 2 === 0) {
      mass142.push(mass14[i]);
   }
}

console.log(mass142); */

// Задание 15


function fun15() {
   return Math.floor(Math.random() * 10);
}

const mass15 = [];

for (let i = 0; i < 10; i++) {
   mass15.push(fun15());
}

console.log(mass15);
console.log(mass15.reduce((a, b) => a + b) / mass15.length);