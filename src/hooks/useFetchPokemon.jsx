/*import { useState, useEffect } from "react";

export const useFetchPokemon = (query) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setCharacters([]);
      return;
    }

    setLoading(true);

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=1500`)
      .then((res) => res.json())
      .then(async (data) => {
        const filtered = data.results
          .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
          .map((p, index) => ({
            id: index + 1,
            name: p.name,
            image: `https://img.pokemondb.net/artwork/large/${p.name}.jpg`,
          }));
        setCharacters(filtered);
        setLoading(false);
      });
  }, [query]);

  return { characters, loading };
};*/

import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const useFetchPokemon = (query) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150");
        const results = response.data.results;

        const pokemonData = await Promise.all(
          results.map(async (p) => {
            const res = await axios.get(p.url);
            return {
              id: res.data.id,
              name: res.data.name,
              image: res.data.sprites.front_default,
            };
          })
        );

        let filtered = pokemonData;
        if (query) {
          filtered = pokemonData.filter((p) =>
            p.name.toLowerCase().startsWith(query.toLowerCase())
          );
        }

        setCharacters(filtered);
        toast.success("¡Pokémon cargados correctamente!", {
          position: "top-center",
          autoClose: 1500,
        });
      } catch (error) {
        toast.error("Error al cargar los Pokémon.", {
          position: "top-center",
          autoClose: 2500,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [query]);

  return { characters, loading };
};

