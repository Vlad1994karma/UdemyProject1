
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if(personalMovieDB.count <= 30) {
            alert('Вы класический зритель'); 
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++) {
            const generalQustion = prompt(`Ваш любимый жанр под номером ${i}`);
            if (generalQustion === "" || generalQustion == null) {
                console.log("Вы ввели некоректные данные");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = generalQustion;  
            }
        }
        personalMovieDB.genres.forEach((element, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${element}`);
        });
    }
};


