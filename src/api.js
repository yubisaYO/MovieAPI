import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getMovieList = async () => {
  console.log(baseUrl);
  const movie = await axios.get(
    // "https://api.themoviedb.org/3/movie/upcoming?api_key=5fe9891cef812b241ead8c63f6d6d8ad"
    `${baseUrl}movie/upcoming?api_key=${apiKey}`
  );
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}search/movie?api_key=${apiKey}&query=${q}`
  );
  return search.data.results;
};
