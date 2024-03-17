import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <NavLink
          to="/"
          className="text-3xl font-extrabold text-transparent bg-clip-text  bg-gradient-to-r from-blue-200 to-purple-300 md:text-4xl lg:text-5xl"
        >
          Recordily
        </NavLink>

        <NavLink
          className="inline-flex items-center justify-center whitespace-nowrap text-md py-2 px-4 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input text-white font-bold bg-gradient-to-r from-blue-200 to-purple-300 bg-background hover:bg-purple-400 rounded-md "
          to="/create"
        >
          Create Employee
        </NavLink>
      </nav>
    </div>
  );
}
