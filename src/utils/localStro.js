export const addMovieLocal = (movie) => {
  let historyMovie = localStorage.getItem("movie-history")
    ? JSON.parse(localStorage.getItem("movie-history"))
    : [];

  const existMovie = historyMovie.some((p) => p.id === movie.id);

  if (existMovie) {
    historyMovie = historyMovie.filter((item) => item.id !== movie.id);
  }

  historyMovie.push(movie);
  localStorage.setItem("movie-history", JSON.stringify(historyMovie));
};

export const getMovieHistory = () => {
  const historyMovie = localStorage.getItem("movie-history")
    ? JSON.parse(localStorage.getItem("movie-history"))
    : [];

  const result = historyMovie.sort((a, b) => b.viewAt - a.viewAt);

  return result;
};
