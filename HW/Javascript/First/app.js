// Task1
// В доме 5 подъездов по 20 квартир каждый.Получите от пользователя номер квартиры и взамен выдайте в консоль номер подъезда.Учитывайте, что пользователь может ввести число меньше 1 или больше 100.

// const flatIndex = +prompt('Введите номер квартиры');
// if (flatIndex < 1 || flatIndex > 100) { alert('Такой квартиры в этом доме нет') } else {
//     const section = Math.ceil(flatIndex / 20);
//     console.log(section);
// }

// Task2
// Получите от пользователя строку с названием марки автомобиля.Напишите конструкцию switch/case, которая будет обрабатывать 6-7 самых известных марок (BMW, Ford, Peugeot etc.) и выдавать в консоль введённую строку + страну происхождения автомобиля (например, "Ford – страна происхождения США"). Для остальных строк выдавайте сообщение "some_input – страна происхождения неизвестна".

// let car = prompt('Введите марку авто', '');

// switch (car) {
//     case 'BMW':
//         console.log(car + ' - Germany');
//         break;
//     case 'Ford':
//         console.log(car + ' - USA');
//         break;
//     case 'SAAB':
//         console.log(car + ' - Sweden');
//         break;
//     default:
//         console.log(car + ' - страна происхождения неизвестна');
// }

// Task3
// Пользователь вводит год.Определите, является ли этот год високосным.
// let year = prompt('Введите год:', '');

// if ((year % 100 == 0) && (year % 400 != 0)) {
//     console.log("Год невисокосный");
// } else if (year % 4 == 0) {
//     console.log("Год високосный");
// } else if (year % 4 != 0) {
//     console.log("Год не високосный");
// }

// Task4
// Пользователь вводит число от 1 до 20. Выведите в консоль таблицу умножения этого числа.Например, для числа 7: 7x1 = 7 7x2 = 14 ... 7x10 = 70

// let i = +prompt('Введите число');
// let b = 1;
// while (b <= 10) {
//     console.log(i * b++);
// }

// Task5
// Выведите в консоль сумму всех нечётных чисел от 1 до 50. Дополнительно: решите эту задачу, используя оператор continue.

// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 != 0) {
//         sum += i;
//     }
// }
// console.log(sum);

// Task 6
// Используя циклы, выведите в консоль первые 15 чисел Фибоначчи.

// let a = 1;
// let b = 1;
// let k = 15;

// console.log(1);
// for (let i = 3; i <= k + 1; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//     console.log(b);
// }

// Task 7
// Используя циклы(и операцию конкатенации), выведите в консоль "шахматную доску":

// let hash = ''
// let size = 8

// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//         (i + j) % 2 ? hash += '#' : hash += ' '
//     }
//     hash += '\n'
// }
// console.log(hash);