

import React from "react";

const CharacterCard = ({ character, onAddFavorite, onRemoveFavorite, isFavorite }) => {
  return (
    <div
      className="
        bg-[#3180f086] text-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.945),_0_4px_6px_-2px_rgba(0,0,0,0.05)]
        p-[5px] rounded-lg flex flex-col lg:flex-row gap-2
        w-full sm:w-[90%] md:w-[600px] lg:w-[800px] xl:w-[950px]
        mt-[40px] mx-auto
      "
    >
      {/* Columna izquierda: descripción y botones */}
      <div
        className="
          flex flex-col justify-between 
          w-full lg:w-[60%] pr-0 lg:pr-6 
          border-b lg:border-b-0 lg:border-r border-dashed border-[#4b5563]
        "
      >
        <div className="text-sm">
          <h3 className="font-extrabold text-2xl mb-4 text-black text-center lg:text-left">
            {character.name}
          </h3>

          {character.status && <p><strong>Status:</strong> {character.status}</p>}
          {character.species && <p><strong>Especie:</strong> {character.species}</p>}
          {character.gender && <p><strong>Género:</strong> {character.gender}</p>}
          {character.origin?.name && <p><strong>Origen:</strong> {character.origin.name}</p>}
          {character.location?.name && <p><strong>Ubicación:</strong> {character.location.name}</p>}

          {/* Pokémon */}
          {character.abilities && character.abilities.length > 0 && (
            <p>
              <strong>Habilidades:</strong>{" "}
              {character.abilities.map((ability) => ability.ability?.name).filter(Boolean).join(", ")}
            </p>
          )}
          {character.base_experience && (
            <p><strong>Experiencia base:</strong> {character.base_experience}</p>
          )}

          {/* Digimon */}
          {character.level && <p><strong>Nivel:</strong> {character.level}</p>}
        </div>

        {/* Botones */}
        <div className="mt-4 text-center">
          {isFavorite ? (
            <button
              onClick={() => onRemoveFavorite(character.id)}
              className="
                w-full font-semibold px-4 py-2 rounded-[10px] transition duration-300 cursor-pointer
                bg-[#ef4444] hover:bg-[#dc2626] border-none
              "
            >
              Quitar
            </button>
          ) : (
            <button
              onClick={() => onAddFavorite(character)}
              className="
                w-full font-semibold px-4 py-2 rounded-[10px] transition duration-300 cursor-pointer
                bg-[#ffffff10] border border-white border-solid
              "
            >
              Añadir
            </button>
          )}
        </div>
      </div>

      {/* Columna derecha: imagen */}
      <div
        className="
          w-full lg:w-[40%] flex items-center justify-center mt-4 lg:mt-0
        "
      >
        <img
          src={character.image}
          alt={character.name}
          className="
            w-[70%] sm:w-[60%] lg:w-[100%] h-auto object-contain rounded-lg max-h-[350px]
          "
        />
      </div>
    </div>
  );
};

export default CharacterCard;







