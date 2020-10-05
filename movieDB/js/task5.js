/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

//код сработает только тогда, когда  ДОМ структура была загружена
document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv'),
            genre = document.querySelector('.promo__genre'),
            poster = document.querySelector('.promo__bg'),
            movieList = document.querySelector('.promo__interactive-list'),
            addForm = document.querySelector('form.add'), //добавляем форму
            addInput = addForm.querySelector('.adding__input'), // добавляем инпут из формы
            checkBox = addForm.querySelector('[type="checkbox"]'); //добавляем чекбокс (пункт 4 задачи) таким образом выделим галчоку которая понадобится внутри формы

    //обработчик событий на форму. чтобы отследить отправку нашей формы.
    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); //страница не будет перезагружаться (отменяем стандартное событие)

        //узнать что пользователь ввел в input и поставил ли галочку сделать любимым фильмом
        let newFilm = addInput.value; //получить новый фильм (тут будет то что ввел пользователь)обращаемся к тому input с которым взаимодействовал пользователь и проверяем его value
        const favourite = checkBox.checked; //обращаемся к чекбоксу (галочка отмечена или нет)

        //чтобы не сохранялась пустая строка, вместо названия фильма:
        if (newFilm) {
            //пункт 2 задачки обрезать название фильма если оно > 21 символа
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substr(0,22)}...`;
            }

            if (favourite) {
                console.log("Добавляем любимый фильм");
            }
            //когда фоорма была заполнена и отправлена нужно сохранить все эти данные в массив movies:
            movieDB.movies.push(newFilm); //добавляем в массив новый фильм что ввел пользователь методом push
            sortArr(movieDB.movies); //сортируем по алфавиту (пункт 5 задачи)
            //на основании уже немного измененных данных берем и создаем наши новые элементы:
            createMovieList(movieDB.movies, movieList);
        }

        //и в самом конце очищаем форму чтобы все данные из нее исчезли:
        addForm.reset();
        //или так:
        // event.target.reset();
    })

    /*Перезапишем код, чтобы более грамотно его использовать там где это можно и везде в дальнейшем где будет нужно удалять блоки с рекламой:
     Чтобы не привязываться к конкретному элементу на страничке будем передавать аргумент arr, который будет определяться в момент вызова функции:*/
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    /*Тут тоже модернизируем код чтобы делать каки-то изменения на странице*/
    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = `url("img/bg.jpg")`;
    }

    /*Тут тоже модернизируем код для сортировки данных.
    Она будет принимать в себя какой-то массив*/
    const sortArr = (arr) => {
        arr.sort();
    };

    // const movieList = document.querySelector('.promo__interactive-list');//выбираем селектор чтобы получить 1-й элемент по данному селектору
    //
    // movieDB.movies.sort();

    //создадим новую ф-цию для дальнейшего переиспользования везде где будет нужно
    function createMovieList(films, parent) { //parent = какой родительский блок будет использовать фильмы
        parent.innerHTML = ""; //полностью очищаем (оставляя его пустым) элемент с помощью метода innerHTML
        sortArr(films);

        //выводим список всех фильмов с порядковым номером
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                     <div class="delete"></div>
                </li>
            `;
        });
        //будем вешать обработчик событий на каждую корзину(которая прописана в css)
        //если пользователь кликает на нее то удалять родителя этой корзины parentElement.remove()
        //и в конце вырезать фильм из базы данных (метод splice)
        document.querySelectorAll('.delete').forEach((btn, i) =>{
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                //чтобы нумерация после удаления фильма менялась вызываем ф-цию создания списка фильмов createMovieList чтобы список заново перестраивался:
                createMovieList(movieDB.movies, movieList);
            })
        });

    }

    deleteAdv(adv);
    makeChanges()
    // sortArr(movieDB.movies);
    createMovieList(movieDB.movies, movieList);  //когда первый раз захоим неа страницу нужно тоже создать movieList чтобы они у нас отобразились на страничке
    // createMovieList(films, parent); //или таким образом
});



