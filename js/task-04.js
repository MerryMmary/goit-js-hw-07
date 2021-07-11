/*
Задание 4

Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.

Создай функции increment и decrement для увеличения и уменьшения значения счетчика

Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
*/

const counterValueBtnEl = document.querySelector('#value');

let counterValue = Number(counterValueBtnEl.textContent); // 0
console.log('counterValue', counterValue); // 0

const decrementRef = document.querySelector('button[data-action="decrement"]');//.textContent; // -1
console.log('decrementRef', decrementRef);

const incrementRef = document.querySelector('button[data-action="increment"]');//.textContent; // +1
console.log('incrementRef', incrementRef);

decrementRef.addEventListener('click', onDecrementBtnClick);
function onDecrementBtnClick (e) {
    //console.log(e);
    counterValue -= 1;
    console.log(counterValue); // -= 1
    counterValueBtnEl.textContent = counterValue;
}

incrementRef.addEventListener('click', onIncrementBtnClick);
function onIncrementBtnClick (e) {
    //console.log(e);
    counterValue += 1;
    console.log(counterValue); // += 1
    counterValueBtnEl.textContent = counterValue;
}