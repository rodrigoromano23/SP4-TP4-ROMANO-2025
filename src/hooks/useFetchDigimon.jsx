/*import { useState, useEffect } from "react";

export const useFetchDigimon = (query) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setCharacters([]);
      return;
    }

    setLoading(true);
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((d) => d.name.toLowerCase().includes(query.toLowerCase()))
          .map((d, index) => ({ id: index + 1, name: d.name, img: d.img }));
        setCharacters(filtered);
        setLoading(false);
      });
  }, [query]);

  return { characters, loading };
};*/

import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const useFetchDigimon = (query) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDigimon = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://digimon-api.vercel.app/api/digimon");
        let results = response.data;

        if (query) {
          results = results.filter((d) =>
            d.name.toLowerCase().startsWith(query.toLowerCase())
          );
        }

        setCharacters(results);
        toast.success("¡Digimon cargados correctamente!", {
          position: "top-center",
          autoClose: 1500,
        });
      } catch (error) {
        toast.error("Error al cargar Digimon.", {
          position: "top-center",
          autoClose: 2500,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDigimon();
  }, [query]);

  return { characters, loading };
};

