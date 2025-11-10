/*import React from "react";

const SearchBar = ({ query, setQuery, placeholder }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder={placeholder}
      className="w-full p-2 rounded border border-gray-300"
    />
  );
};

export default SearchBar;*/

import React, { useState, useEffect } from "react";

const SearchBar = ({ query, setQuery, onSearch, suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filtrar sugerencias según la letra inicial
  useEffect(() => {
    if (query.length > 0) {
      const filtered = suggestions.filter((name) =>
        name.toLowerCase().startsWith(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query, suggestions]);

  const handleSelect = (name) => {
    setQuery(name);
    setShowSuggestions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-4">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Escribe un nombre..."
          className="border-2 border-yellow-400 bg-transparent text-white placeholder-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
        <button
          type="submit"
          className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
        >
          Buscar
        </button>
      </form>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="absolute bg-gray-900 border border-yellow-400 rounded-lg w-full mt-1 shadow-lg z-10 max-h-48 overflow-y-auto">
          {filteredSuggestions.map((name, index) => (
            <li
              key={index}
              onClick={() => handleSelect(name)}
              className="p-2 hover:bg-yellow-200 hover:text-black cursor-pointer text-white"
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
///------------------------------------------------------------------------

//------------------------------------------------------------------

