"use strict";

let numberOfFilms;
function start(){
    numberOfFilms=+prompt('Сколько фильмов вы уже посмотрели?','');
    while (numberOfFilms==''||numberOfFilms==null||isNaN(numberOfFilms)){
        numberOfFilms=+prompt('Сколько фильмов вы уже посмотрели?','');
    }
}
start();
const personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private: false,
};
function showMyDB(hidden){
if (!hidden) {
    console.log(personalMovieDB);
}
}
showMyDB();

function writeYourGenres(){
    for (var i=1;i<=3;i++) {
    //const genres=prompt(`Ваш любимы жанр под номером ${i}`);
    //personalMovieDB.genres[i-1]=genres;
    personalMovieDB.genres[i-1]=prompt(`Ваш любимы жанр под номером ${i}`);

}}
writeYourGenres();
function rememberMyFilms(){
for (let i=0;i<2;i++){
const a=prompt('Один из последних фильмов?',''),
 b=prompt('На сколько оцените его?','');
if (a!=null&&b!=null&a!=''&&b!=''&&a.length<50){

 //let    num=null;
 //while (num<2){
   //  num++;
     //const a=prompt('Один из последних фильмов?',''),
     //b=prompt('На сколько оцените его?','');
    // if (a!=null&&b!=null&a!=''&&b!=''&&a.length<50){

   // do {console.log(num);
     //   num++;
        ///const a=prompt('Один из последних фильмов?',''),
        //b=prompt('На сколько оцените его?','');}
        //while (num<2);
        //if (a!=null&&b!=null&a!=''&&b!=''&&a.length<50){ 

 
 
personalMovieDB.movies[a]=b;
console.log('done');}
else {console.log('error');
i--;}}

}
rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count<10){
    console.log("Просмотрено довольно мало фильмов");
}
else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 )
{console.log("Вы классический зритель");}
else if (personalMovieDB.count > 30){ console.log("Вы киноман");}
else {console.log("произошла ошибка");}


}
detectPersonalLevel();
console.log(personalMovieDB);
 