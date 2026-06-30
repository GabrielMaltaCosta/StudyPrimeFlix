import movieDate from "../../Helpers/MovieHelpers/movieDate.jsx";
import movieAgeCertification from "../../Helpers/MovieHelpers/movieAgeCertification.jsx";
import MovieGenres from "../MovieGenres.jsx";
import RatingMedia from "../RatingMedia.jsx";
import { movierRunTime } from "../../Helpers/MovieHelpers/movieRunTime.jsx";

function BannerInfoMovie({ movie }) {
  if (!movie) return null;

  return (
    <div
      className="banner-movie"
      style={{
        backgroundImage: ` linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
        ),url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="banner-info-content">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="banner-info-text">
          <h2 className="info-title banner-movie-title">
            {movie.title?.toUpperCase()}
            <span>({movieDate(movie.release_date).movieYear})</span>
          </h2>
          <div className="control-spans">
            {movieAgeCertification(movie)}
            <span className="movie-release-date">
              {movieDate(movie.release_date).formattedDate}
            </span>
            - <MovieGenres genres={movie?.genres} />-
            <span className="margin-left-5px movie-release-date">
              {movierRunTime(movie.runtime)}
            </span>
          </div>
          <RatingMedia media={movie.vote_average} />
          <p className="banner-movie-overview">{movie.overview}</p>
          <p className="banner-movie-taline">
            "{movie.tagline?.toUpperCase()}"
          </p>
        </div>
      </div>
    </div>
  );
}
export default BannerInfoMovie;
