


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if(personalMovieDB.count <= 30) {
        alert('Вы класический зритель'); 
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        const generalQustion = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = generalQustion;
    }
}

writeYourGenres();


