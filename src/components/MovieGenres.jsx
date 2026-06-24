function MovieGenres({ genres }) {
  if (!genres) return null;
  return (
    <>
      {genres.map((item) => (
        <span className="genre-tag" key={item.id}>
          {item.name}
        </span>
      ))}
    </>
  );
}
export default MovieGenres;
