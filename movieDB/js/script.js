/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//Моё решение:

// const ads = document.querySelector('.promo__adv'); //создадим переменную чтобы удалить блок с рекламой
//
// ads.remove();

// const genre = document.querySelector('.promo__genre');
//
// genre.replaceWith('ДРАМА');

// div.innerHTML = "<h1>Comedy</h1>";

// const bg = document.querySelector('.promo__bg');

// bg.replaceWith('(img/bg.jpg');

// movieDB.movies.forEach(i = 0; i < movieDB; i++) {
//     document.write('')
// }

// movieDB.movies.sort();

//Решение ментора:

const ads = document.querySelectorAll('.promo__adv');
ads.forEach(item => {
    item.remove();
});

const genre = document.querySelector('.promo__genre');
genre.textContent = 'драма';

const poster = document.querySelector('.promo__bg');
poster.style.backgroundImage = `url("img/bg.jpg")`;

const moviesList = document.querySelector('.promo__interactive-list');//выбираем селектор чтобы получить 1-й элемент по данному селектору
moviesList.innerHTML = ""; //полностью очищаем (оставляя его пустым) элемент с помощью метода innerHTML

movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    moviesList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
         <div class="delete"></div>
    </li>
    `;
});