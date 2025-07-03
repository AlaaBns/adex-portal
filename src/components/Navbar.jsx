import { NavLink } from "react-router-dom";
import logo from "./logo.png"; // adjust path as needed

export default function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/departments/commercial", label: "Commercial" },
    { to: "/departments/logistic", label: "Logistic" },
    { to: "/departments/management", label: "Management" },
    { to: "/departments/client-service", label: "Client Service" },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo instead of text */}
        <NavLink to="/">
          <img src={logo} alt="Adex Logo" className="h-10 w-auto" />
        </NavLink>

        <div className="flex gap-6 text-base font-medium">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative px-3 py-1 group transition-all duration-300 ease-in-out ${
                  isActive
                    ? "font-bold text-white"
                    : "text-white hover:text-white/90"
                }`
              }
            >
              <span className="absolute inset-0 scale-0 group-hover:scale-100 bg-white/10 rounded-full blur-sm transition-transform duration-500 ease-in-out z-0" />
              <span className="relative z-10 group-hover:scale-105 group-hover:tracking-wider transition-all duration-300 ease-in-out">
                {label}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
