

import React, { useState } from "react";
import Home from "./pages/Home";
import Digimon from "./pages/Digimon";
import Pokemon from "./pages/Pokemon";
import RickAndMorty from "./pages/RickAndMorty";
import Favorites from "./pages/Favorites";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [selectedUniverse, setSelectedUniverse] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "Digimon", label: "Digimon", image: "/img/digimon.jpg" },
    { id: "Pokemon", label: "Pokémon", image: "/img/pokemon.jpg" },
    { id: "Rick", label: "Rick & Morty", image: "/img/rick-2.jpg" },
    { id: "Favorites", label: "Favoritos", image: "/img/fondo.jpg" },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-900 text-white">
      {/* Botón de menú solo visible en móviles */}
      <button
        className="md:hidden bg-black/70 text-white p-3 fixed top-4 left-4 z-50 rounded-xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Columna izquierda (nav) */}
      <nav
        className={`fixed md:static top-0 left-0 h-full md:h-auto bg-black/70 flex flex-col p-4 space-y-4 backdrop-blur-md transform transition-transform duration-300 z-40
        ${menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} w-64`}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setSelectedUniverse(item.id);
              setMenuOpen(false);
            }}
            className="relative group rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-32 object-cover transition duration-300 group-hover:brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-center justify-center">
              <span className="text-xl font-bold text-white drop-shadow-lg">{item.label}</span>
            </div>
          </button>
        ))}
      </nav>

      {/* Área principal */}
      <main
        className="flex-1 p-6 md:ml-0 overflow-auto bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        {!selectedUniverse && <Home />}
        {selectedUniverse === "Digimon" && <Digimon />}
        {selectedUniverse === "Pokemon" && <Pokemon />}
        {selectedUniverse === "Rick" && <RickAndMorty />}
        {selectedUniverse === "Favorites" && <Favorites />}
      </main>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;



