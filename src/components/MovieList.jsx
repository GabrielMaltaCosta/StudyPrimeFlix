import { useRef } from "react";
import { Link } from "react-router-dom";

function MovieList({ movies }) {
  const carrouselRef = useRef(null);

  function scrollLeft() {
    carrouselRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    carrouselRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  }

  return (
    <section className="movie-section">
      <h2 className="movie-list-title">Filmes Em Alta</h2>
      <div className="movie-list-wrapper">
        <button className="movie-list-button left" onClick={scrollLeft}>
          ◀
        </button>
        <div className="movie-list" ref={carrouselRef}>
          {movies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <div className="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
              </div>
            </Link>
          ))}
        </div>
        <button className="movie-list-button right" onClick={scrollRight}>
          ▶
        </button>
      </div>
    </section>
  );
}
export default MovieList;
