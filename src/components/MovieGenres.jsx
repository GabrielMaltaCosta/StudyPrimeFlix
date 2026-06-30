function MovieGenres({ genres }) {
  if (!genres) return null;
  return (
    <div className=" margin-left-5px movie-genres-list">
      {genres.map((item) => (
        <span className="genre-tag" key={item.id}>
          {item.name}
        </span>
      ))}
    </div>
  );
}
export default MovieGenres;
