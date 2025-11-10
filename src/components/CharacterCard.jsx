

import React from "react";

const CharacterCard = ({ character, onAddFavorite, onRemoveFavorite, isFavorite }) => {
  return (
    // Estilos de .card-container
    <div 
      className="
        // Fondo y sombra
        bg-[#3180f086] text-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.945),_0_4px_6px_-2px_rgba(0,0,0,0.05)] 
        // Layout, padding y bordes
        p-[5px] rounded-lg flex gap-[1px] 
        // Dimensiones y posición
        w-[600px] mt-[40px] ml-[150px]
      "
    > 
      
      {/* Columna de la izquierda: Descripción y Botones */}
      <div 
        className="
          flex flex-col justify-between 
          // Ancho y padding (ATENCIÓN: w-[150%] excede el ancho normal de la tarjeta)
          w-[150%] pr-4 
          // Borde
          border-r border-dashed border-[#4b5563] border-r-[1px]
        "
      > 
        
        <div className="text-sm"> 
          
          {/* Estilos de .character-name */}
          <h3 className="font-extrabold text-xl mb-4 text-[#000000]">
            {character.name}
          </h3>
          
          {/* --- Descripciones por universo --- */}
          {character.status && <p><strong>Status:</strong> {character.status}</p>}
          {character.species && <p><strong>Especie:</strong> {character.species}</p>}
          {character.gender && <p><strong>Género:</strong> {character.gender}</p>}
          {character.origin?.name && <p><strong>Origen:</strong> {character.origin.name}</p>} 
          {character.location?.name && <p><strong>Ubicación:</strong> {character.location.name}</p>}

          {/* Pokémon */}
          {character.abilities && character.abilities.length > 0 && (
            <p>
              <strong>Habilidades:</strong> 
              {character.abilities.map(ability => ability.ability?.name).filter(Boolean).join(", ")}
            </p>
          )}
          {character.base_experience && (
            <p><strong>Experiencia base:</strong> {character.base_experience}</p>
          )}

          {/* Digimon */}
          {character.level && <p><strong>Nivel:</strong> {character.level}</p>}
        </div>

        {/* --- Botones de acción --- */}
        <div className="mt-6 text-center"> 
          {isFavorite ? (
            <button
              onClick={() => onRemoveFavorite(character.id)}
              // Estilos de .btn .favorite-remove
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
              // Estilos de .btn .favorite-add
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

      {/* Columna de la derecha: Imagen */}
      <div 
        className="
          // Ancho y padding (ATENCIÓN: w-[160%] excede el ancho normal de la tarjeta)
          w-[160%] pl-4 flex items-center justify-center
        "
      > 
        
        {/* Estilos de .character-image */}
        <img
          src={character.image}
          alt={character.name}
          className="
            // Dimensiones
            w-[150%] h-auto object-contain rounded-lg max-h-[350px] block
          " 
        />
      </div>
    </div>
  );
};

export default CharacterCard;





