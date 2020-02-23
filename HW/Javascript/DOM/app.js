// 1.Дан элемент #elem.Добавьте ему класс "www".
const elem = document.querySelector('h1');
elem.classList.add('www');

// 2.Дан элемент #elem.Проверьте наличие у него класса "www", если есть - удалите класс

console.log(elem.classList.contains("www")); //true
elem.classList.remove("www");

// 3 / Напишите функцию поиска recursiveSearchTags, которая принимает на вход document и имя тега, а возвращает массив из всех элементов соответствующих этому тегу.Поиск идет в теге body

function recursiveSearchTags(element, name) {
    return [...element.getElementsByTagName(name)];
}
console.log(recursiveSearchTags(document.body, 'div'));

// 4.Дан ul.Дан массив.Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.Сделайте так, чтобы четные позиции имели красный фон.

// 5. Дан элемент #elem.Найдите его соседа сверху и добавьте ему в конец текст '!'

// 6.Реализуйте функцию wrapInParagraph, которая находит текст(дочерние текстовые ноды) внутри элемента div и оборачивает текст в параграф

// 7.Реализуйте функцию normalizeClassNames, которая нормализует имена классов для всех элементов на странице.В данном случае это означает что происходит преобразование всех классов написанных используя kebab нотацию в camelCase нотацию: text - center => textCenter