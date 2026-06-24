function movieAgeCertification(movieData) {
  const ageRatings = {
    L: { className: "greenAge" },
    10: { className: "blueAge" },
    12: { className: "yellowAge" },
    14: { className: "orangeAge" },
    16: { className: "redAge" },
    18: { className: "blackAge" },
  };
  if (!movieData.release_dates) return null;
  const movieCertifications = movieData.release_dates.results;
  const movieCerticationBR = movieCertifications.find(
    (certification) => certification.iso_3166_1 === "BR",
  );
  const ageCertification = movieCerticationBR?.release_dates[0].certification;
  return (
    <span className={ageRatings[ageCertification]?.className}>
      {ageCertification}
    </span>
  );
}
export default movieAgeCertification;
