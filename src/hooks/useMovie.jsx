import { useEffect, useState } from "react";
import { getMovieNowPlayService } from "../services/Movie/getMovieNowPlayService";
export function useMovie() {
  const [moviesData, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const moviesData = await getMovieNowPlayService();
      setMovies(moviesData);
    }
    fetchMovies();
  }, []);
  return moviesData;
}
