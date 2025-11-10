/*import React from "react";

const Sidebar = ({ setUniverse }) => {
  return (
    <div className="w-56 bg-gray-100 p-4 h-screen">
      <h2 className="text-xl font-bold mb-4">Universos</h2>
      <ul className="space-y-2">
        <li
          className="cursor-pointer hover:text-blue-500"
          onClick={() => setUniverse("digimon")}
        >
          Digimon
        </li>
        <li
          className="cursor-pointer hover:text-blue-500"
          onClick={() => setUniverse("pokemon")}
        >
          Pokémon
        </li>
        <li
          className="cursor-pointer hover:text-blue-500"
          onClick={() => setUniverse("rick")}
        >
          Rick & Morty
        </li>
        <li
          className="cursor-pointer hover:text-blue-500"
          onClick={() => setUniverse("favorites")}
        >
          Favoritos
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;*/

import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClasses = ({ isActive }) =>
    `block px-4 py-2 rounded hover:bg-gray-200 ${isActive ? "bg-gray-300 font-bold" : ""}`;

  return (
    <div className="w-48 bg-gray-100 min-h-screen p-4 space-y-2">
      <NavLink to="/digimon" className={linkClasses}>Digimon</NavLink>
      <NavLink to="/pokemon" className={linkClasses}>Pokémon</NavLink>
      <NavLink to="/rickandmorty" className={linkClasses}>Rick & Morty</NavLink>
      <NavLink to="/favorites" className={linkClasses}>Favoritos</NavLink>
    </div>
  );
};

export default Sidebar;


