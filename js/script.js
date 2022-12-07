const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++){
    const lastFilm = prompt('Какой фильм вы посмотрели?', ''),
          gradeOfFilm = prompt('На сколько оцените?', '');
          
    if(lastFilm != null && gradeOfFilm != null && lastFilm.length < 50 && lastFilm != ''){
        personalMovieDB.movies[lastFilm] = gradeOfFilm;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if(personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count <= 30) {
    alert('Вы класический зритель'); 
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB);

