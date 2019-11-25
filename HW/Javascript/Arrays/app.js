// 1.Создайте массив из чисел от 1 до 35. Вырежьте из него первые 10 элементов, а затем добавьте их в конец массива.Разверните в обратном порядке элементы с 11 по 20. Удалите элементы с 21 по 25, на их место вставьте пять первых степеней двойки.Элементы с 26 по 30 замените на единицы.Элементы с 31 по 35 склейте в одну строку, разделяя пробелами, и замените на итоговую строку.

// Создайте массив из чисел от 1 до 35.
let numArr = Array.from({ length: 36 }, (v, i) => i);
numArr.shift();
// console.log(numArr);

// Вырежьте из него первые 10 элементов,
let removed = numArr.splice(0, 10);
// console.log(numArr);

// а затем добавьте их в конец массива.
numArr = numArr.concat(removed);
// console.log(numArr);

// Разверните в обратном порядке элементы с 11 по 20.
let reversed = numArr.splice(0, 10);
reversed.reverse();
numArr = reversed.concat(numArr);
// console.log(numArr);

// Удалите элементы с 21 по 25, на их место вставьте пять первых степеней двойки
numArr.splice(10, 5, 2 ** 1, 2 ** 2, 2 ** 3, 2 ** 4, 2 ** 5);
// console.log(numArr);

// Элементы с 26 по 30 замените на единицы.
numArr.fill(1, 15, 20);
// console.log(numArr);

// Элементы с 31 по 35 склейте в одну строку, разделяя пробелами, и замените на итоговую строку.
let cutted = numArr.slice(20, 25);
cutted = cutted.join(' ');
numArr.splice(20, 5, cutted);
console.log(numArr);

//2. Напишите функцию, которая удаляет из массива повторяющиеся элементы и возвращает обновлённый массив.

let doublArr = [2, 3, 4, 2, 3, 4, 2];
const result = [...new Set(doublArr)];
console.log(result);

//3. Напишите функцию, удаляющую из массива все элементы, которые при приведении к типу Boolean дают false.




// 1.Используя встроенную функцию Math.random(), напишите собственную функцию getRandomArray(len), которая возвращает массив случайных чисел длиной len.

function getRandomArray(len) {
    let randomArr = [];
    for (let i = 0; i < len; i++) {
        randomArr[i] = (Math.random(i));
    }
    return randomArr;
}
let mainArr = getRandomArray(10);
console.log(mainArr);

// 2.Выведите в консоль элементы массива, которые больше среднего арифметического всех элементов.
let secondArr = getRandomArray(5);

function upMiddle(secondArr) {
    const total = secondArr.reduce((acc, c) => acc + c, 0);
    return total / secondArr.length;
}
const average = upMiddle(secondArr);
console.log(average);
console.log(secondArr.filter(item => item > average));