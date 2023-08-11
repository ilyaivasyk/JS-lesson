let numberOfFilms;

function start() {
  numberOfFilms = prompt("How many movie you watched", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("How many movie you watched", "");
  }
}

start();
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("last movie", ""),
      b = prompt("point", "");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

rememberMyFilms(); 

function detectPersolnalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("watched few movies");
  }
  else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
    console.log("you are a classic viewer");
  }
  else if (personalMovieDB.count > 30) {
    console.log("you are a movie buff");
  }
  else {
    console.log("error");
  }
}
detectPersolnalLevel(); 

console.log(personalMovieDB);

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}

function writeYouGenres () {
  //s
}