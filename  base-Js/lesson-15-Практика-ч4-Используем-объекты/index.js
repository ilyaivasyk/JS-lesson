const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = prompt("How many movie you watched", "");
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = prompt("How many movie you watched", "");
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPersolnalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("watched few movies");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("you are a classic viewer");
    } else if (personalMovieDB.count > 30) {
      console.log("you are a movie buff");
    } else {
      console.log("error");
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    }
  },

  writeYouGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`select your gener of index ${i}`);
      if (genre === "" || genre == null) {
        console.log("you ente incorect data");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`
favorite ganre ${i + 1} - ${item} `);
    });
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat == false) {
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
  },
};
