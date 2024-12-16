import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../service/api";

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

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home py-8 w-full box-border">
      <form
        onSubmit={handleSearch}
        className="search-form max-w-xl mx-auto mb-8 flex gap-4 px-4 box-border"
      >
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input flex-1 p-3 rounded-md bg-gray-800 text-white text-base focus:outline-none focus:ring-2 focus:ring-gray-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="search-button px-6 py-3 bg-red-600 text-white rounded-md font-medium transition duration-200 hover:bg-red-700 whitespace-nowrap"
        >
          Search
        </button>
      </form>

      {error && (
        <div className="error-message text-red-500 text-center">{error}</div>
      )}

      {loading ? (
        <div className="loading text-center">Loading...</div>
      ) : (
        <div className="movies-grid grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 p-4 w-full box-border">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
