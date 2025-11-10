/*export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key) => {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : null;
};*/

const FAVORITES_KEY = "favorites";

// Guardar favoritos
export const saveFavorites = (favorites) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

// Cargar favoritos
export const loadFavorites = () => {
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
};

// Agregar un favorito
export const addFavoriteToStorage = (character) => {
  const favorites = loadFavorites();
  const exists = favorites.find((fav) => fav.name === character.name);
  if (!exists) {
    favorites.push(character);
    saveFavorites(favorites);
    return true; // útil para notificaciones
  }
  return false;
};

// Eliminar un favorito
export const removeFavoriteFromStorage = (name) => {
  const favorites = loadFavorites();
  const updated = favorites.filter((fav) => fav.name !== name);
  saveFavorites(updated);
};

