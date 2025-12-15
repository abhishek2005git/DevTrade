import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { auth, logout } = useAuth();
  const User = auth?.user;

  return (
    <header className="w-full bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-white">
        DevTrade
      </Link>

      <nav className="flex items-center gap-6 text-gray-300">
        <Link to="/projects" className="hover:text-white transition">Explore</Link>
        <Link to="/my-projects" className="hover:text-white transition">My Projects</Link>
        <Link to="/upload" className="hover:text-white transition">Upload</Link>

        {User ? (
          <>
            <span className="text-gray-00">{User?.name}</span>
            <Button variant="outline" onClick={logout}>Logout</Button>
          </>
        ) : (
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        )}
      </nav>
    </header>
  );
}
