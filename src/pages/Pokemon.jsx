
//--------------------------------------------------------------------------
import React, { useState, useEffect, useContext } from "react";
import SearchBar from "../components/SearchBar";
import CharacterCard from "../components/CharacterCard";
import { FavoritesContext } from "../context/FavoritesContext";
import { toast } from "react-toastify";

const Pokemon = () => {
  const [query, setQuery] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [allNames, setAllNames] = useState([]);
  const [loading, setLoading] = useState(false); // 🔹 Estado del loader
  const { addFavorite } = useContext(FavoritesContext);

  // Cargar nombres de todos los Pokémon al inicio
  useEffect(() => {
    const fetchAllPokemonNames = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
        const data = await res.json();
        setAllNames(data.results.map((p) => p.name));
      } catch (error) {
        console.error("Error al cargar los nombres de Pokémon:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllPokemonNames();
  }, []);

  // Buscar un Pokémon por nombre
  const handleSearch = async (name) => {
    if (!name.trim()) {
      toast.warn("Por favor ingresa un nombre válido.");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );
      if (!res.ok) throw new Error("No se encontró el Pokémon");

      const data = await res.json();
      const abilities = data.abilities.map((a) => a.ability.name);

      const pokemon = {
        id: data.id,
        name: data.name,
        base_experience: data.base_experience,
        image: data.sprites.front_default,
        abilities,
        types: data.types.map((t) => t.type.name),
        height: data.height,
        weight: data.weight,
        info: `Altura: ${data.height} | Peso: ${data.weight} | Tipo: ${
          data.types[0].type.name
        } | Habilidades: ${abilities.join(", ")} | Experiencia base: ${
          data.base_experience
        }`,
      };

      setPokemonData(pokemon);
      toast.success(`¡${pokemon.name} encontrado!`);
    } catch (error) {
      setPokemonData(null);
      toast.error("No se encontró el Pokémon ingresado.");
    } finally {
      setLoading(false);
    }
  };

  // Añadir a favoritos
  const handleAddFavorite = () => {
    if (pokemonData) {
      addFavorite(pokemonData);
      toast.info(`${pokemonData.name} añadido a favoritos.`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
        Universo Pokémon
      </h2>

      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
        suggestions={allNames}
      />

      {/* 🔹 Loader visual */}
      {loading && (
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-yellow-300 text-lg font-semibold tracking-wide">
            Cargando Pokemon...
          </p>
        </div>
      )}

      {!loading && pokemonData && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          <CharacterCard
            character={pokemonData}
            onAddFavorite={handleAddFavorite}
          />
        </div>
      )}
    </div>
  );
};

export default Pokemon;

//-----------------------------------------------------------------


