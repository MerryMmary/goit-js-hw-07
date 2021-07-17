/*
Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное 
количество символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - 
красным.
Для добавления стилей, используй CSS-классы valid и invalid.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/

const inputRef = document.querySelector('#validation-input');
console.log('inputRef is —', inputRef);

const inputRefDataLength = Number(inputRef.dataset.length); // select data-attribute -> 6
console.log('inputRefDataLength is —', inputRefDataLength);

inputRef.addEventListener('blur', onValidationInput);

function onValidationInput() {
    console.log('inputRef.value.length is —', inputRef.value.length);
     if (inputRef.value.length !== inputRefDataLength) {
       inputRef.classList.add('invalid');
       console.log('Not valid!!!');
     } else {
       inputRef.classList.remove('invalid');
       inputRef.classList.add('valid');
       console.log('OK!');
     }
}