/*import { useState, useEffect } from "react";

export const useFetchRick = (query) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setCharacters([]);
      return;
    }

    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then((res) => res.json())
      .then((data) => {
        const results = data.results || [];
        const formatted = results.map((c) => ({
          id: c.id,
          name: c.name,
          image: c.image,
        }));
        setCharacters(formatted);
        setLoading(false);
      })
      .catch(() => {
        setCharacters([]);
        setLoading(false);
      });
  }, [query]);

  return { characters, loading };
};*/

import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const useFetchRick = (query) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRickAndMorty = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://rickandmortyapi.com/api/character");
        let results = response.data.results;

        if (query) {
          results = results.filter((char) =>
            char.name.toLowerCase().startsWith(query.toLowerCase())
          );
        }

        setCharacters(results);
        toast.success("¡Personajes cargados correctamente!", {
          position: "top-center",
          autoClose: 1500,
        });
      } catch (error) {
        toast.error("Error al cargar personajes.", {
          position: "top-center",
          autoClose: 2500,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchRickAndMorty();
  }, [query]);

  return { characters, loading };
};

