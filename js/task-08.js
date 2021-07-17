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
const createBtnEl = document.querySelector('button[data-action="render"]');
console.log('createBtnEl', createBtnEl);

const deleteBtnEl = document.querySelector('button[data-action="destroy"]');
console.log('deleteBtnEl', deleteBtnEl);

const boxesRef = document.querySelector('#boxes');
console.log('boxesRef', boxesRef);

const userRectQuantity = document.querySelector('#controls input');
console.dir('userRectQuantity', userRectQuantity); // doesn't read value


//userRectQuantity.addEventListener('input', countRectanglesListener);



// function countRectanglesListener(event) {
//     console.log('event.currentTarget.value', event.target.value);
//     const amount = Number(event.target.value); // === this.value
    
//     return amount;
// }

// let amount = userRectQuantity.value;
// console.log('let amount', amount);
 
userRectQuantity.addEventListener('blur', onInputBlur);

function onInputBlur() {
    const amount = userRectQuantity.innerHTML;
    console.log('onInputBlur() amount', amount);
    return amount;
}

// const amount = function onInputBlur(e) {
//     console.log(userRectQuantity.value);
// }

let rectArr = [];
function createBoxes(amount, onInputBlur) {
    //userRectQuantity.removeEventListener(countRectanglesListener);
    console.log('onInputBlur in func', onInputBlur); 
    console.log('amount in func', amount);
    //let rectArr = [];
    console.log('amount in func', amount); // ===> mouseEvent :((((
    for (let i = 1; i <= amount; i += 1) {
        console.log('i', i);
        rectArr.push(`<div class="box" style="width:${20 + 10 * i}px; height:${20 + 10 * i}px; background-color: rgb(${Math.round((Math.random() * (255 - 1) + 1))}, ${Math.round((Math.random() * (255 - 1) + 1))}, ${Math.round((Math.random() * (255 - 1) + 1))});"> 
        </div>`);
    }

    console.log("rectArr.join('')", rectArr.join('')); // array of created <div>-s

    console.log(boxesRef.insertAdjacentHTML('beforeend', `${rectArr.join('')}`));
    //return boxesRef.insertAdjacentHTML('afterbegin', rectArr.join(''));
    return rectArr;

}
console.log('rectArr', rectArr);

createBtnEl.addEventListener('click', createBoxes);
// function onClickcreateBtn() {
//     boxesRef.insertAdjacentHTML('afterbegin', rectArr.join(''));
// }


/*
const repeat = function (n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
};


function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}
*/





// function generateRectangles(event) {
//     console.log('event.currentTarget.value', event.currentTarget.value);
//     const userRectAmount = event.Target.value; // Entered quantity

//     let rectArr = [];
//     for (let i = 1; i <= userRectAmount; i += 1) {
//         rectArr.push(`<div class="box" style="width:${20 + 10 * i}px; height:${20 + 10 * i}px; background-color: rgb(${Math.round((Math.random() * (255 - 1) + 1))}, ${Math.round((Math.random() * (255 - 1) + 1))}, ${Math.round((Math.random() * (255 - 1) + 1))});"> 
//         </div>`);
//     }

//     console.log("rectArr.join('')", rectArr.join('')); // array of created <div>-s

//     console.log(boxesRef.insertAdjacentHTML('beforeend', `${rectArr.join('')}`));
//     return boxesRef.insertAdjacentHTML('afterbegin', rectArr.join(''));

// }