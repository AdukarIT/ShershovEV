// Создайте функцию, которая получает в качестве аргументов три числа и возвращает наименьшее из них.

// let a = +prompt('first number');
// let b = +prompt('Введите час');
// let c = +prompt('fird number');

// function minNumber(a, b, c) {
//     return Math.min(a, b, c)
// }
// let result = minNumber(a, b, c);
// alert(result);

// Создайте функцию, которая получает в качестве аргументов значения суток, часов и минут, а возвращает соответствующее им количество секунд.

// let day = +prompt('Введите сутки');
// let hour = +prompt('Введите час');
// let minute = +prompt('Введите минуту');

// function getSecond(a, b, c) {
//     return a * 86400 + b * 3600 + c * 60
// }
// alert(getSecond(day, hour, minute) + ' seconds');

// Напишите рекурсивную функцию для подсчёта факториала числа.

// let number = +prompt('Введите число');

// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }

// alert(factorial(number));

// Напишите рекурсивную функцию, которая разворачивает введённое число задом наперёд.Например, если на вход функция получает 1234, вернуть она должна 4321.

// let number = +prompt('Введите число');

// function reverse(num) {
//     let str = num.toString();
//     if (str.length) {
//         return reverse(str.substr(1)) + str[0];
//     } else {
//         return num;
//     }
// };

// alert(reverse(number));

// Напишите функцию для решения квадратных уравнений.В качестве параметров она должна принимать коэффиценты a, b и c, возвращать – количество корней.Сами корни уравнения(или информацию о их отсутствии) функция должна выводить в консоль.Примечание 1. Ищем только решения в действительных числах, комплексные не нужны! Примечание 2. Для получения квадратного корня используйте стандартную функцию JS: Math.sqrt().