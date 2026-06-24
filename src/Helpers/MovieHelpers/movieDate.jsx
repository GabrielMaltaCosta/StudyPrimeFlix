function MovieDate(date) {
  if (!date) return "";
  const splitedDate = date.split("-");
  const movieYear = splitedDate[0];
  const formattedDate = date.split("-").reverse().join("/");
  return { movieYear, formattedDate };
}

export default MovieDate;
