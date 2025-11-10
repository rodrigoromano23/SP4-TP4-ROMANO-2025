

//-------------------------------funcional correcto-------------------------------------
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

  const navItems = [
    { id: "Digimon", label: "Digimon", image: "/img/digimon.jpg" },
    { id: "Pokemon", label: "Pokémon", image: "/img/pokemon.jpg" },
    { id: "Rick", label: "Rick & Morty", image: "/img/rick-2.jpg" },
    { id: "Favorites", label: "Favoritos", image: "/img/fondo.jpg" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      {/* Columna izquierda */}
      <nav className="w-64 ml-8 bg-black/70 flex flex-col p-4 space-y-4 backdrop-blur-md">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedUniverse(item.id)}
            className="relative group rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105"
          >
            {/* Imagen de fondo */}
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-32 object-cover transition duration-300 group-hover:brightness-75"
            />

            {/* Capa oscura con texto */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${item.color} via-transparent to-transparent flex items-center justify-center`}
            >
              <span className="text-xl font-bold text-white drop-shadow-lg">
                {item.label}
              </span>
            </div>
          </button>
        ))}
      </nav>

      {/* Área principal con márgenes globales laterales */}
      <main
        className="flex-1 overflow-auto bg-cover bg-center px-6 md:px-12 lg:px-24 py-6"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        {!selectedUniverse && <Home />}
        {selectedUniverse === "Digimon" && <Digimon />}
        {selectedUniverse === "Pokemon" && <Pokemon />}
        {selectedUniverse === "Rick" && <RickAndMorty />}
        {selectedUniverse === "Favorites" && <Favorites />}
      </main>

      {/* ToastContainer global */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
};

export default App;


