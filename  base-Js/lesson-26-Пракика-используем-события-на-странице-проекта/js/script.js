/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов 

6) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

7) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

8) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

9) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

10) Фильмы должны быть отсортированы по алфавиту */

"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const adv = document.querySelectorAll(".promo__adv img"),
    advTitles = document.querySelectorAll(".promo__adv-title"),
    promBg = document.querySelector(".promo__bg"),
    genre = document.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    // removeMovies = addForm.querySelectorAll(".delete"),
    inptuForm = addForm.querySelector(".adding__input"),
    checkbox = addForm.querySelector('[type="checkbox"]');

  const removeAdv = () => {
    //*************** 1
    adv.forEach((items) => {
      items.remove();
    });
    advTitles[0].remove();
  };
  removeAdv();

  const makeChanges = () => {
    //*************** 2
    genre.textContent = "ДРАМА";
    //*************** 3
    promBg.style.cssText = "background: url('img/bg.jpg')";
  };

  makeChanges();

  //*************** 4 - 5
  const sortArr = (arr) => {
    arr.sort();
  };

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let newMovies = inptuForm.value;
     const favorite = checkbox.checked;
    if (newMovies) {
      if (newMovies.length > 21) {
        newMovies = `${newMovies.substring(0, 22)}...`;
      }

      if(favorite) {
        console.log("add");
      }
      movieDB.movies.push(newMovies);
      sortArr(movieDB.movies);
      creatMoviesList(movieDB.movies, movieList);
      event.target.reset();
    }

  });

  const creatMoviesList = (films, parent) => {
    parent.innerHTML = "";
     sortArr(movieDB.movies);
    films.forEach((film, i) => {
      parent.innerHTML += ` <li class="promo__interactive-item">${
        i + 1
      } ${film} 
  <div class="delete"></div>
  </li>`;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener(('click'), () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        creatMoviesList(films, parent);
      });
    });
  };
  creatMoviesList(movieDB.movies, movieList);
});
