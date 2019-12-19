// 3. Напишите функцию, которая определяет, является ли строка палиндромом.

function isPalindrome(str) {
    let strLen = str.length,
        strReverse = str.split('').reverse().join('');
    if (strReverse == str) {
        return true;
    } else {
        return false;
    };
};
console.log(isPalindrome('abc'));

// 6. Напишите функцию, которая замяняет первую букву каждого слова в строке на такую же большую.

function capitalize(str) {
    return str.replace(/(^|\s)\S/g, function(a) { return a.toUpperCase() });
};
console.log(capitalize('каждый охотник желает знать'));

// 7 / Напишите функцию, которая заменяет все повторяющиеся символы в строке на звёздочки.Например, строка "я учусь программированию" должна преобразоваться в "я уч*сь прог*ам*и**в*н*ю".

let str = "я учусь программированию";
let arr = str.split("");
let tmpArr = [];
for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (char !== ' ' && tmpArr.indexOf(char) > -1) {
        char = '*';
    }
    tmpArr.push(char);
}
let newStr = tmpArr.join("");
console.log(newStr);

// 8. Напишите функцию, которая возвращает текущий день недели на русском языке.

let date = new Date();
let day = date.getDay();

function showDay(day) {
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return days[day];
}
console.log(showDay(day));