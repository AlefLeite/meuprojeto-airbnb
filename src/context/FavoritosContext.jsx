import { createContext, useState } from "react";
import axios from "axios";

export const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const url = "http://localhost:3000/card/";

  const [favoritos, setFavoritos] = useState({});

  const toggleFavorite = (id) => {
    setFavoritos((prevFavoritos) => {
      // Copia o objeto de favoritos anterior e altera o estado do favorito correspondente ao id
      const novosFavoritos = { ...prevFavoritos };
      novosFavoritos[id] = !prevFavoritos[id]; // Inverte o valor atual (true/false) diretamente
      axios.patch(url + id, { favorito: novosFavoritos[id] });

      return novosFavoritos;
    });
  };
  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorite }}>
      {children}
    </FavoritosContext.Provider>
  );
};
