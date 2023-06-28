const numberOfFilms = +prompt("How many movie you watched", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("last movie", ""),
  b = prompt("point", ""),
  c = prompt("last movie", ""),
  d = prompt("point", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
