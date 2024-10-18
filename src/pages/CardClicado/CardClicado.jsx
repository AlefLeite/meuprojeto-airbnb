import React from "react";
import "./style.css";

const CardClicado = ({ allHouses, idCard }) => {
  var acomodacao = allHouses[idCard];

  const precoNoite = acomodacao?.preco.toLocaleString("pt-BR");

  return (
    <div className="card-infos">
      <div className="container-fluid">
        <div style={{ width: "100%" }} className="container-airbnb row">
          {
            <div className="container-cardclicado">
              <h3>{acomodacao?.detalhes?.titulo}</h3>
              <div className="imagens-cardclicado">
                <img
                  className="imglarge-cardclicado"
                  src={acomodacao?.imagens[0]}
                />
                <div className="container-imagens-menor">
                  <img
                    className="imgsmall-cardclicado"
                    src={acomodacao?.imagens[1]}
                  />
                  <img
                    className="imgsmall-cardclicado"
                    src={acomodacao?.imagens[2]}
                  />
                </div>
              </div>

              <div className="conteudo-card">
                <div className="informacoes">
                  <p className="titulo-quarto">
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                      <span
                        style={{ display: "inline-block" }}
                        className="fw-bold text-truncate"
                      >
                        {acomodacao?.cidade}, {acomodacao?.pais}
                      </span>
                      <span>
                        <i className="mdi mdi-star"></i>
                        {acomodacao?.nota}
                      </span>
                    </div>
                  </p>
                  <p className="text-muted my-0">100 KM de distancia</p>
                  <p className="text-muted">20 de Out - 1 de novembro</p>
                  <p>
                    <strong>Estado: </strong>
                    {acomodacao?.detalhes?.estado}
                  </p>
                  <p>
                    <strong>Sobre este lugar:</strong>
                    <br /> {acomodacao?.detalhes?.sobre}
                  </p>
                  <div className="heartAnimation position-absolute top-0 end-0"></div>
                </div>
                <div className="reservar">
                  <p className="fw-bold preco-noite">R$ {precoNoite} noite</p>
                  <div className="alinha-precos">
                    <p>R${precoNoite} x 5 noites</p>
                    <p>R${precoNoite * 5}</p>
                  </div>
                  <div className="alinha-precos">
                    <p>Taxa de serviços</p>
                    <p>R$50</p>
                  </div>
                  <div className="alinha-precos">
                    <p>Taxa de limpeza</p>
                    <p>R$100</p>
                  </div>
                  <div className="alinha-precos">
                    <p>Total</p>
                    <p>R${precoNoite * 5 + 50 + 100}</p>
                  </div>
                  <button>Reserve já</button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default CardClicado;
