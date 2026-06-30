function RatingMedia({ media }) {
  const formattedMedia = media?.toFixed(1);
  return (
    <div className="rating">
      <span className="rating">
        <h1>{formattedMedia}</h1>
      </span>
    </div>
  );
}

export default RatingMedia;
