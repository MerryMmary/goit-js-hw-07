/*
Задание 5
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет 
его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 
'незнакомец'.

<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
*/

const inputNameRef = document.querySelector('#name-input');
console.log('inputNameRef', inputNameRef);

let inputNameRefValue = inputNameRef.value;
console.log('inputNameRefValue', inputNameRefValue);

let nameOutputRef = document.querySelector('#name-output');
console.log('nameOutputRef', nameOutputRef);


inputNameRef.addEventListener('input', onNameInput);
function onNameInput(event) {
    console.log(event.currentTarget.value); // current input
    //nameOutputRef.textContent = this.value;

    event.currentTarget.value !==' '
    ? nameOutputRef.textContent = event.currentTarget.value
    : nameOutputRef.textContent = 'незнакомец';
}
