/*
Задание 2
В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего 
вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй 
document.createElement().
*/
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


/*
// ============================ REPLACE LIST ============================
const tempList = document.createElement('ul');
tempList.setAttribute('id', 'ingredients')
// console.log(tempList); // <ul id="ingredients"></ul> -- copy, will be replaced

const ingredientsItemsEl=[...ingredients].map(elem => {
    //console.log(elem); // Картошка Грибы ...
    const ingredientItem=document.createElement('li');
    ingredientItem.textContent = elem;
    return tempList.appendChild(ingredientItem);
    //return ingredientsItem;
})
console.log('ingredientsItemsEl', ingredientsItemsEl);
console.log('tempList', tempList); // new <ul> with <li>-s

const ingredientsListEl = document.getElementById('ingredients');
//console.log('ingredientsListEl', ingredientsListEl); // <ul id="ingredients"></ul>

ingredientsListEl.replaceWith(tempList); // replace <ul>-s
*/


// ============================ APPEND LI-s ============================

const ingredientsListEl = document.getElementById('ingredients');
console.log('ingredientsListEl', ingredientsListEl); // <ul id="ingredients"></ul>


const ingredientsItem=ingredients.map(elem => {
    //console.log(elem); // Картошка Грибы ...
    const ingredientItem=document.createElement('li');
    ingredientItem.textContent = elem;
    //return tempList.appendChild(ingredientItem);
    return ingredientItem;
})
console.log('ingredientsItem', ingredientsItem);// [li, li, li, ....] array of <li>-s objects

ingredientsListEl.append(...ingredientsItem); // add <li>-s to the DOM