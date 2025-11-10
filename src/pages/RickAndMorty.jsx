
//------------------------------------------------------------------------------------
import React, { useState, useEffect, useContext } from "react";
import SearchBar from "../components/SearchBar";
import CharacterCard from "../components/CharacterCard";
import { FavoritesContext } from "../context/FavoritesContext";
import { toast } from "react-toastify";

const RickAndMorty = () => {
  const [query, setQuery] = useState("");
  const [characterData, setCharacterData] = useState(null);
  const [allNames, setAllNames] = useState([]);
  const [loading, setLoading] = useState(false); // 🔹 Estado para el loader
  const { addFavorite } = useContext(FavoritesContext);

  // Cargar todos los nombres de personajes al inicio
  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        setLoading(true);
        let allChars = [];
        let nextUrl = "https://rickandmortyapi.com/api/character";
        while (nextUrl) {
          const res = await fetch(nextUrl);
          const data = await res.json();
          allChars = [...allChars, ...data.results.map((c) => c.name)];
          nextUrl = data.info.next;
        }
        setAllNames(allChars);
      } catch (error) {
        console.error("Error al cargar personajes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllCharacters();
  }, []);

  // Buscar personaje por nombre exacto
  const handleSearch = async (name) => {
    if (!name.trim()) {
      toast.warn("Por favor ingresa un nombre válido.");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      );
      if (!res.ok) throw new Error("Personaje no encontrado");
      const data = await res.json();
      const char = data.results[0];
      const character = {
        id: char.id,
        name: char.name,
        image: char.image,
        status: char.status || "Desconocido",
        species: char.species || "Desconocido",
        gender: char.gender || "Desconocido",
        origin: char.origin?.name || "Desconocido",
        location: char.location?.name || "Desconocido",
        info: `Estado: ${char.status} | Especie: ${char.species} | Origen: ${char.origin.name}`,
      };
      setCharacterData(character);
      toast.success(`¡${character.name} encontrado!`);
    } catch (error) {
      setCharacterData(null);
      toast.error("No se encontró el personaje ingresado.");
    } finally {
      setLoading(false);
    }
  };

  // Añadir a favoritos
  const handleAddFavorite = () => {
    if (characterData) {
      addFavorite(characterData);
      toast.info(`${characterData.name} añadido a favoritos.`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
        Universo Rick & Morty
      </h2>

      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
        suggestions={allNames}
      />

      {/* 🔹 Loader visual (verde Rick & Morty style) */}
      {loading && (
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-yellow-300 text-lg font-semibold tracking-wide">
            Cargando Personaje...
          </p>
        </div>
      )}

      {!loading && characterData && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          <CharacterCard
            character={characterData}
            onAddFavorite={handleAddFavorite}
          />
        </div>
      )}
    </div>
  );
};

export default RickAndMorty;

//--------------------------------------------------------------------------
