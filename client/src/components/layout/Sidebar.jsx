import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Explore Projects", path: "/projects" },
    { name: "My Projects", path: "/my-projects" },
    { name: "Upload Project", path: "/upload" },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-900 border-r border-gray-800 p-4 hidden md:block">
      <h2 className="text-white text-2xl font-semibold mb-6">Dashboard</h2>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800
                ${pathname === link.path ? "bg-gray-800 text-white" : ""}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
