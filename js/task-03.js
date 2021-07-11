/*
Задание 3
Напиши скрипт для создания галлереи изображений по массиву данных.

В HTML есть список ul#gallery.

<ul id="gallery"></ul>
Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки 
используй шаблонные строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.

Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
*/

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
console.log('images', images);

const ulGalleryEl = document.getElementById('gallery');
ulGalleryEl.style.listStyleType = 'none';
ulGalleryEl.style.display = 'flex';
ulGalleryEl.style.flexDirection = 'row';

console.log('ulGalleryEl', ulGalleryEl);

// ================== v1 with create ==================

/*const listEl = images.map(img => {
    const liEl = document.createElement('li');
    liEl.style.width = 'calc(100%/3';
    liEl.setAttribute('height', '200');
    liEl.style.overflow = 'hidden';

    const imgEl = document.createElement('img');
    imgEl.src = img.url;
    imgEl.alt = img.alt;
    imgEl.style.dispay = 'block';
    imgEl.setAttribute('width','100%');
    
    liEl.appendChild(imgEl);

    console.log('liEl', liEl);
    return liEl;
})
console.log(listEl);

const liEl = ulGalleryEl.append(...listEl);
console.log(liEl);
*/

// ================== v2 шаблонная строка ==================

const listEl = images.map(({ url, alt }) => {
    return `<li height="100" style="overflow:hidden"> <img src="${url}" alt="${alt}" width="100%"/> </li>`;
})
console.log('listEl', listEl);

ulGalleryEl.insertAdjacentHTML('afterbegin',
    listEl.join('')
);