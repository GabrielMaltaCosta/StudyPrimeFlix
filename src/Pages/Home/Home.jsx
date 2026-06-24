import { useEffect, useState } from "react";
import BannerMovie from "../../components/Banners/BannerMovie";
import MovieList from "../../components/MovieList";
import { useMovie } from "../../hooks/useMovie";

function Home() {
  const [bannerMovie, setBannerMovie] = useState(null);
  const movies = useMovie();

  useEffect(() => {
    async function getRandomMovie() {
      if (movies.length > 0) {
        const index = Math.floor(Math.random() * movies.length);
        setBannerMovie(movies[index]);
      }
    }
    getRandomMovie();
  }, [movies]);

  function filterMovies() {
    return movies.filter((movie) => movie.id !== bannerMovie?.id);
  }

  return (
    <div>
      <main>
        {bannerMovie && <BannerMovie movie={bannerMovie} />}
        <MovieList movies={filterMovies()} />
      </main>
    </div>
  );
}
export default Home;
