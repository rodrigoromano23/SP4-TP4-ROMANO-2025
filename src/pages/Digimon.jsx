
//---------------------------------------------------------------
import React, { useState, useEffect, useContext } from "react";
import SearchBar from "../components/SearchBar";
import CharacterCard from "../components/CharacterCard";
import { FavoritesContext } from "../context/FavoritesContext";
import { toast } from "react-toastify";

const Digimon = () => {
  const [query, setQuery] = useState("");
  const [digimonData, setDigimonData] = useState(null);
  const [allNames, setAllNames] = useState([]);
  const [loading, setLoading] = useState(false); 
  const { addFavorite } = useContext(FavoritesContext);

  // Cargar todos los nombres de Digimon al inicio
  useEffect(() => {
    const fetchAllDigimon = async () => {
      try {
        const res = await fetch("https://digimon-api.vercel.app/api/digimon");
        const data = await res.json();
        setAllNames(data.map((d) => d.name));
      } catch (error) {
        console.error("Error al cargar Digimon:", error);
      }
    };
    fetchAllDigimon();
  }, []);

  // Buscar Digimon por nombre exacto
  const handleSearch = async (name) => {
    if (!name.trim()) {
      toast.warn("Por favor ingresa un nombre válido.");
      return;
    }

    try {
      setLoading(true); 
      const res = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`);
      if (!res.ok) throw new Error("Digimon no encontrado");

      const data = await res.json();
      const digimon = {
        id: data[0].name,
        name: data[0].name,
        image: data[0].img,
        level: data[0].level,
        info: `Nivel: ${data[0].level}`,
      };

      setDigimonData(digimon);
      toast.success(`¡${digimon.name} encontrado!`);
    } catch (error) {
      setDigimonData(null);
      toast.error("No se encontró el Digimon ingresado.");
    } finally {
      setLoading(false); // 👈 desactiva loader
    }
  };

  // Añadir a favoritos
  const handleAddFavorite = () => {
    if (digimonData) {
      addFavorite(digimonData);
      toast.info(`${digimonData.name} añadido a favoritos.`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6 drop-shadow-lg">
        Universo Digimon
      </h2>

      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
        suggestions={allNames}
      />

      {/* 🔥 Loader visual mientras se busca */}
      {loading && (
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-yellow-300 text-lg font-semibold tracking-wide">
            Cargando Digimon...
          </p>
        </div>
      )}

      {/* Mostrar resultado solo cuando no está cargando */}
      {!loading && digimonData && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          <CharacterCard character={digimonData} onAddFavorite={handleAddFavorite} />
        </div>
      )}
    </div>
  );
};

export default Digimon;

//---------------------------------------------------------------------




