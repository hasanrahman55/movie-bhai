import { useMovieContext } from "../contexts/MovieContexts";

function MovieCard({ movie }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);
  function handleFavoriteClick() {
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-900 transition-transform duration-200 h-full flex flex-col hover:-translate-y-1">
      <div className="relative aspect-[2/3] w-full">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 opacity-0 transition-opacity duration-200 flex flex-col justify-end p-4 hover:opacity-100">
          <button
            className={`absolute top-4 right-4 text-white text-xl p-2 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 hover:bg-black/80 ${
              favorite ? "text-red-500" : ""
            }`}
            onClick={handleFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-white">{movie.title}</h3>
        <p className="text-gray-400 text-sm">
          {movie.release_date?.split("-")[0]}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
