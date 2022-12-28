
// Exercise 1: Get the array of all directors.
function getAllDirectors() {
  let result = movies.map((movie) => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let arrayfiltrado = array.filter((movie)=> movie.director == director)
  
  let pelis = arrayfiltrado.map((movie) => movie.title);
  console.log("EXERCICE 2 ->", pelis);
  return pelis;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let arrayfiltrado = array.filter((movie)=> movie.director == director)
  let resultado = moviesAverage(arrayfiltrado);
  return resultado;
}

function moviesAverage(array){
  let resultado = array.reduce ((acc,item) => {
    return acc += item.score
  },0);

  return Number(resultado/array.length).toFixed(2); 
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let resultado = movies.sort( (a,b) => {
    if (a.title > b.title){
      return 1;
    }
    if(a.title < b.title){
      return -1;
    }
    return 0;
  })
  return resultado.map((movie) => movie.title).slice(0,19);
}


// Exercise 5: Order by year, ascending
function orderByYear() {
let resultado = movies.sort((a,b) => {
  if (a.year>b.year){
    return 1;
  }
  if (a.year<b.year){
    return -1;
  }

  if (a.title>b.title){
    return 1;
  }
  if (a.title<b.title){
    return -1;
  }
  return 0
})
console.log(resultado)
}
  


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genero) {
let arrayfiltrado = array.filter((movie)=> movie.genre.includes(genero));

let resultado = moviesAverage(arrayfiltrado);
return resultado;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
