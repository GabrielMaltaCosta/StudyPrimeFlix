import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/Movie/getMovieDetails";
import { getMovieCredits } from "../services/Movie/getMovieCredits";
export function useMovieDetails(movieId) {
  const [movie, setMovie] = useState([]);
  const [actors, setActors] = useState(null);
  useEffect(() => {
    async function fetchMovieData() {
      try {
        const [movieData, creditsData] = await Promise.all([
          getMovieDetails(movieId),
          getMovieCredits(movieId),
        ]);
        setMovie(movieData);
        const allCrew = creditsData.cast;
        const filterActors = allCrew.filter(
          (a) => a.known_for_department == "Acting",
        );
        setActors(filterActors);
      } catch (error) {
        console.log("Erro fetching movie data ", error);
      }
    }
    fetchMovieData();
  }, [movieId]);
  return [movie, actors];
}
