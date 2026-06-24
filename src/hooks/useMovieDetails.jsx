import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/Movie/getMovieDetails";
export function useMovieDetails(movieId) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function findMovie() {
      const movieData = await getMovieDetails(movieId);
      setMovie(movieData);
    }
    findMovie();
  }, [movieId]);
  return movie;
}
