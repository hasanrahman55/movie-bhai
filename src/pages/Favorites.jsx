import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContexts";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites && favorites.length > 0) {
    return (
      <div className="favorites px-8 py-8 w-full box-border">
        <h2 className="text-center mb-8 text-4xl text-white shadow-sm">
          Your Favorites
        </h2>
        <div className="movies-grid grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty text-center px-8 py-16 bg-white/5 rounded-xl mx-auto mt-8 max-w-xl">
      <h2 className="mb-4 text-3xl text-red-600">No Favorite Movies Yet</h2>
      <p className="text-gray-400 text-lg leading-relaxed">
        Start adding movies to your favorites and they will appear here!
      </p>
    </div>
  );
}

export default Favorites;
