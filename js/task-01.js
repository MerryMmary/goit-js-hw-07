/*
Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка 
элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4
*/

// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Получится 'В списке 3 категории.'.

const itemsEl = document.querySelectorAll('.item');
//console.log('itemsEl is', itemsEl); // itemsEl is NodeList(3) [li.item, li.item, li.item]

console.log(`В списке ${itemsEl.length} категории.`);

// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка
// элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

const itemsTitleEl = document.querySelectorAll('.item h2');
//console.log('itemsTitleEl', itemsTitleEl); // itemsTitleEl NodeList(3) [h2, h2, h2]

itemsTitleEl.forEach(TitleEl => {
    console.log('Категория:', TitleEl.textContent.toUpperCase()); // Животные Продукты Технологии
    console.log('Количество элементов в категории:', TitleEl.nextElementSibling.children.length);
})


