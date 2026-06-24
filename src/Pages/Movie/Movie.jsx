import { useParams } from "react-router-dom";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import BannerInfoMovie from "../../components/Banners/BannerInfoMovie";
import MovieInfo from "../../components/MovieInfo";

function Movie() {
  const { movieId } = useParams();
  const movie = useMovieDetails(movieId);

  return (
    <div>
      <main>
        {movie && <BannerInfoMovie movie={movie} />}
        <MovieInfo />
      </main>
    </div>
  );
}
export default Movie;
