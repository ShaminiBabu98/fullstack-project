var showMovieInfo;
var movie = {
    title: "The God Father",
    actors: "Marlon Brando, Al Pacino, James Caan",
    directors: "Francis Ford Coppola"
  };
 

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};
showMovieInfo();

