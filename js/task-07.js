/*
Задание 7

Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании 
ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>

*/

const fontSizeControlRef = document.getElementById('font-size-control');
console.log('fontSizeControlRef.value', fontSizeControlRef.value);

const textRef = document.getElementById('text');
console.log(getComputedStyle(textRef).getPropertyValue("font-size"));
textRef.style.fontSize = '50px';

fontSizeControlRef.addEventListener('input', onChangeRangeInput);


function onChangeRangeInput (e) {
    //console.log(e.currentTarget.value); // from 0-100 range

    let tempRange = e.currentTarget.value;
    console.log('tempRange', tempRange);

    textRef.style.fontSize = `${tempRange}px`;

    //let currentFontSize = getComputedStyle(textRef).getPropertyValue("font-size"); // Computed style font-size
    //console.log('currentFontSize', currentFontSize);

    //textRef.style.fontSize = `calc(0.2em*${tempRange})`;
    // if (tempRange <= 50) {
    //     textRef.style.fontSize = `calc(${currentFontSize} - ${tempRange}px)`;
    // } else {
    //     textRef.style.fontSize = `calc(${currentFontSize} + ((${tempRange} - 50))px)`;
    // }
}