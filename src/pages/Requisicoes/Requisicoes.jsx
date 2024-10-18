import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import Navbar from "../../components/NavBar/Navbar";

const Requisicoes = () => {
  const url = "http://localhost:3000/pendentes";

  const [pendente, setPendente] = useState([]);

  const handleAprova = () => {};
  const handleDescarta = () => {};

  useEffect(() => {
    async function getPendentes() {
      axios
        .get(url)
        .then((response) => {
          setPendente(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    }
    getPendentes();
  }, []);

  return (
    <div>
      <Navbar />
        {pendente?.map((acomodacao) => (
          <div className="card-pendente" key={acomodacao.id}>
            <h3>
              {acomodacao?.cidade}, {acomodacao?.estado}, {acomodacao?.pais}
            </h3>
            <p> Categoria: {acomodacao?.categoria}</p>
            <p> Preço R${acomodacao?.preco} por noite</p>
            <div className="buttons-pendente">
              <button type="button" onClick={handleAprova}>
                Aprovar
              </button>
              <button type="button" onClick={handleDescarta}>
                Descartar
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Requisicoes;
