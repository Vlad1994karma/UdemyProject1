const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm1 = prompt('Какой последний фильм вы посмотрели?', ''),
      gradeOfFilm1 = prompt('На сколько оцените?', ''),
      lastFilm2 = prompt('Какой последний фильм вы посмотрели?', ''),
      gradeOfFilm2 = prompt('На сколько оцените?', '');

personalMovieDB.movies[lastFilm1] = gradeOfFilm1;
personalMovieDB.movies[lastFilm2] = gradeOfFilm2;

console.log(personalMovieDB);
