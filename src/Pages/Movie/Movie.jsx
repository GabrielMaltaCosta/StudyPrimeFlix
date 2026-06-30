import { useParams } from "react-router-dom";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import BannerInfoMovie from "../../components/Banners/BannerInfoMovie";
import MovieInfo from "../../components/MovieInfo";
import ActorsList from "../../components/ActorsList";

function Movie() {
  const { movieId } = useParams();
  const [movie, actors] = useMovieDetails(movieId);

  return (
    <div>
      <main>
        {movie && <BannerInfoMovie movie={movie} />}
        <ActorsList actors={actors} />
        <MovieInfo />
      </main>
    </div>
  );
}
export default Movie;
