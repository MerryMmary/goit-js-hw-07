/*
Задание 8 - дополнительное, выполнять не обязательно
Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в 
input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, 
коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает 
столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>
*/
const createBtnRef = document.querySelector('button[data-action="render"]');
console.log('createBtnRef', createBtnRef);

const deleteBtnRef = document.querySelector('button[data-action="destroy"]');
console.log('deleteBtnRef', deleteBtnRef);

const boxesRef = document.querySelector('#boxes');
boxesRef.style = ('display:flex; flex-wrap: wrap; justify-content: center; align-items: center;')
console.log('boxesRef', boxesRef);

const userRectQuantity = document.querySelector('#controls input');
console.dir('userRectQuantity', userRectQuantity.value); // doesn't read value


createBtnRef.addEventListener('click', createBoxes);
deleteBtnRef.addEventListener('click', destroyBoxes);

function createBoxes() {
  const boxHeight = 20;
  const boxWidth = 20;

  const amount = Number(userRectQuantity.value);
  console.log('amount in createBoxes()', amount);

  let rectArr = [];
  for (let i = 1; i <= amount; i += 1) {
    console.log('i', i);
    rectArr.push(`<div class="box" style="width:${boxWidth + 10 * i}px; height:${boxHeight + 10 * i}px; margin: 10px; background-color: rgb(${Math.round((Math.random() * (255 - 1) + 1))}, ${Math.round((Math.random() * (255 - 1) + 1))}, ${Math.round((Math.random() * (255 - 1) + 1))});"> 
    </div>`);
  }
  
    //rectArr.join(''); // array of created <div>-s to string 

    boxesRef.insertAdjacentHTML('beforeend', `${rectArr.join('')}`);

}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}
