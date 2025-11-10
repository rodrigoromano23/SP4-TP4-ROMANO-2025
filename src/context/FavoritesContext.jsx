

import React, { createContext, useState, useEffect } from "react";

// Crear el contexto
export const FavoritesContext = createContext();

// Proveedor del contexto
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Cargar favoritos desde localStorage al iniciar
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Guardar en localStorage cada vez que cambia favorites
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Función para agregar un favorito
  const addFavorite = (character) => {
    const exists = favorites.find(
      (fav) => String(fav.id) === String(character.id) || fav.name === character.name
    );
    if (!exists) {
      setFavorites([...favorites, character]);
      return true; // para notificaciones
    }
    return false;
  };

  // ✅ Función para eliminar por id o name (según el caso)
  const removeFavorite = (identifier) => {
    setFavorites(
      favorites.filter(
        (fav) => String(fav.id) !== String(identifier) && fav.name !== identifier
      )
    );
  };

  // ✅ (opcional) Función para limpiar todos los favoritos
  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, clearFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};



