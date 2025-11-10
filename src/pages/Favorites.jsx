
//-------------------------------------------------------------------------------------------------

import React, { useContext, useState } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const Favorites = () => {
  const { favorites, removeFavorite, clearFavorites } = useContext(FavoritesContext);
  const [hovered, setHovered] = useState(null);

  return (
    <div className="px-6 relative">
      {/* --- Título --- */}
      <h1 className="text-2xl font-bold mb-6 text-center text-white">Favoritos</h1>

      {/* --- Botón flotante para eliminar todos --- */}
      {favorites.length > 0 && (
        <button
          onClick={clearFavorites}
          className="
            fixed top-6 right-6
            bg-red-600 hover:bg-red-700
            text-white font-semibold px-4 py-2
            rounded-full shadow-lg transition-all
          "
        >
          Eliminar todos
        </button>
      )}

      {/* --- Contenido principal --- */}
      {favorites.length === 0 ? (
        <p className="text-center text-white/80">No hay personajes favoritos.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((char) => (
            <li
              key={char.id || char.name}
              className="relative group"
              onMouseEnter={() => setHovered(char.id || char.name)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* --- Nombre + botón individual --- */}
              <div className="flex items-center justify-between bg-blue-500/20 border border-blue-400 rounded-lg px-4 py-2 shadow-sm text-white hover:bg-blue-500/40 transition">
                <span className="font-semibold truncate">{char.name}</span>
                <button
                  onClick={() => removeFavorite(char.id || char.name)}
                  className="ml-3 text-sm px-2 py-1 bg-red-600 hover:bg-red-700 rounded-md transition"
                >
                  Quitar
                </button>
              </div>

              {/* --- Tooltip con info --- */}
              {hovered === (char.id || char.name) && (
                <div
                  className="
                    absolute z-20 left-1/2 -translate-x-1/2 top-[110%]
                    bg-[#1e293b] text-white text-sm rounded-lg shadow-lg
                    p-4 w-[280px] transition-all duration-300
                    animate-fadeIn
                  "
                >
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-[180px] object-cover rounded-md mb-3"
                  />

                  <h3 className="font-bold text-lg mb-2">{char.name}</h3>

                  {/* --- RICK & MORTY --- */}
                  {char.status && <p><strong>Status:</strong> {char.status}</p>}
                  {char.species && <p><strong>Especie:</strong> {char.species}</p>}
                  {char.gender && <p><strong>Género:</strong> {char.gender}</p>}
                  {char.origin && <p><strong>Origen:</strong> {char.origin}</p>}
                  {char.location && <p><strong>Ubicación:</strong> {char.location}</p>}

                  {/* --- POKÉMON --- */}
                  {char.abilities && char.abilities.length > 0 && (
                    <p>
                      <strong>Habilidades:</strong>{" "}
                      {char.abilities
                        .map((a) => a.ability?.name)
                        .filter(Boolean)
                        .join(", ")}
                    </p>
                  )}
                  {char.base_experience && (
                    <p>
                      <strong>Experiencia base:</strong> {char.base_experience}
                    </p>
                  )}
                  {char.height && (
                    <p>
                      <strong>Altura:</strong> {char.height / 10} m
                    </p>
                  )}
                  {char.weight && (
                    <p>
                      <strong>Peso:</strong> {char.weight / 10} kg
                    </p>
                  )}

                  {/* --- DIGIMON --- */}
                  {char.level && <p><strong>Nivel:</strong> {char.level}</p>}
                  {char.type && <p><strong>Tipo:</strong> {char.type}</p>}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;








