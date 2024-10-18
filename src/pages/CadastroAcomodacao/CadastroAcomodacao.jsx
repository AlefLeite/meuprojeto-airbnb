import React, { useState } from "react";
import axios from "axios";
import "./style.css"

const CadastroAcomodacao = () => {

  const url = "http://localhost:3000/pendentes"
  const [id, setId] = useState(2000)
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [pais, setPais] = useState("");
  const [categoria, setCategoria] = useState(0);
  const [preco, setPreco] = useState(0);
  const [error, setError] = useState("");

  const handleCadastra = () => {
    if(!cidade | !estado | !pais | !categoria | !preco){
      setError("Preencha todos os campos")
      return;
    } 
    // if(typeof(categoria) !== "number"){
    //   setError("Categoria deve ser um numero")
    //   return;
    // } if(typeof(preco) !== "number"){
    //   setError("Preço deve ser um numero")
    //   return;
    // }
     else{
      alert("Enviado para a aprovação");
      axios.post(url, {id, cidade, estado, pais, categoria, preco})
      setId(id +1);
    }
    
  };

  return (
    <div>
      <form >
        <div className="container-cadastra">
        <h3>Anuncie no Airbnb</h3>
          <div className="input-floating">
            <label>Cidade:</label>
            <input
              value={cidade}
              onChange={(e) => [setCidade(e.target.value), setError("")]}
              type="text"
              placeholder="Digite a Cidade da acomodacao"
            />
          </div>
          <div className="input-floating">
            <label>Estado:</label>
            <input
              value={estado}
              onChange={(e) => [setEstado(e.target.value), setError("")]}
              type="text"
              placeholder="Digite o Estado da acomodacao"
            />
          </div>
          <div className="input-floating">
            <label>País:</label>
            <input
              value={pais}
              onChange={(e) => [setPais(e.target.value), setError("")]}
              type="text"
              placeholder="Digite o País da acomodacao"
            />
          </div>
          <div className="input-floating">
            <label>Categoria do ambiente:</label>
            <input
              value={categoria}
              onChange={(e) => [setCategoria(e.target.value), setError("")]}
              type="number"
              placeholder="Digite a categoria"
            />
          </div>
          <div className="input-floating">
            <label>Preço por noite:</label>
            <input
              value={preco}
              onChange={(e) => [setPreco(e.target.value), setError("")]}
              type="number"
              placeholder="Digite a cidade da acomodacao"
            />
          </div>
          <label className="error-content">{error}</label>
          <button className="button-cadastra" type="button" onClick={handleCadastra}>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default CadastroAcomodacao;
