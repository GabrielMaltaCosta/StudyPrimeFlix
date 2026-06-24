import { Link } from "react-router-dom";
function BannerMovie({ movie }) {
  if (!movie) {
    return null;
  }
  return (
    <div
      className="banner-movie"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="banner-movie-content">
        <h2 className="banner-movie-title">{movie.title?.toUpperCase()}</h2>
        <p className="banner-movie-overview">{movie.overview}</p>
        <Link to={`/movie/${movie.id}`} className="banner-movie-button">
          Mais Informações
        </Link>
      </div>
    </div>
  );
}

export default BannerMovie;
