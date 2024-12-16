import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-black p-4 md:p-6 flex justify-between items-center shadow-md">
      <div className="text-xl md:text-2xl font-bold">
        <Link to="/" className="text-white">
          Movie Bhai
        </Link>
      </div>
      <div className="flex gap-4 md:gap-8">
        <Link
          to="/"
          className="text-white text-sm md:text-base py-2 px-4 rounded transition-colors duration-200 hover:bg-white/10"
        >
          Home
        </Link>
        <Link
          to="/favorites"
          className="text-white text-sm md:text-base py-2 px-4 rounded transition-colors duration-200 hover:bg-white/10"
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
