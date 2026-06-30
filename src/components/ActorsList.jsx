import { useRef } from "react";
function ActorsList({ actors }) {
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
      <h2 className="movie-list-title">Atores</h2>
      <div className="movie-list-wrapper">
        <button className="movie-list-button left" onClick={scrollLeft}>
          ◀
        </button>
        <div className="movie-list" ref={carrouselRef}>
          {actors?.map((actor) => (
            <div className="movie-card" key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                className="movie-poster"
              />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </div>
          ))}
        </div>
        <button className="movie-list-button right" onClick={scrollRight}>
          ▶
        </button>
      </div>
    </section>
  );
}
export default ActorsList;
