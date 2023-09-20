import "./App.css";
import { getMovieList, searchMovie, searhMovie } from "./api";
import { useEffect, useState } from "react";
const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const inputMovie = await searchMovie(q);
      setPopularMovies(inputMovie);
    } else {
      getMovieList().then((result) => {
        setPopularMovies(result);
      });
    }
  };

  console.log({ movieList: popularMovies });

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="movie-wrapper" key={i}>
          <div className="movie-title">{`${movie.title}`}</div>
          <img
            className="movie-image"
            src={`${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`}
          />

          <div className="movie-date">{movie.release_date}</div>
          <div className="movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  console.log({ popularMovies: popularMovies });

  return (
    <div className="App">
      <header className="App-header">
        <h1>CHARLES MOVIE MANIA</h1>
        <input
          placeholder="cari movie kesayanganmu . . ."
          className="movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
};

export default App;
