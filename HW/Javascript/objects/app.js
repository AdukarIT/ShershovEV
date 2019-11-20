// Напишите функцию, которая получает в качестве аргументов объект и строку и проверяет, есть ли в этом объекте свойство с именем, равным этой строке.

let user = {
    name: "John",
    surname: "Smith",
    birthPlace: "Handuras"
};

function isPropertyExists(obj, str) {
    if (obj[str] !== undefined) {
        return true;
    } else {
        return false;
    }
};
console.log(user);
console.log(isPropertyExists(user, "birthPlace"));