"use strict";


const numberoffiels = prompt("Сколько?", '');

const personalMovie = {
    count: numberoffiels,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Один из просмотренных?', ''),
        b = prompt('На сколько оцените?', ''),
        c = prompt('Один из просмотренных?', ''),
        d = prompt('На сколько оцените?', '');

personalMovie.movies[a] = b;
personalMovie.movies[c] = d;

console.log(personalMovie);