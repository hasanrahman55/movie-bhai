import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies } from "../service/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadPopularMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    } catch (error) {
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPopularMovies();
  }, []);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 p-4 w-full">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default Home;
