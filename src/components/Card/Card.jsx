import React, { useContext } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./card.css";
import axios from "axios";
import { FavoritosContext } from "../../context/FavoritosContext";

const Card = ({ filterHouses, sendIdCard, sendShowCard }) => {

  const {favoritos, toggleFavorite} = useContext(FavoritosContext);

  //const [favoritos, setFavoritos] = useState({})
  const url = "http://localhost:3000/card/";

  function cardClick(id) {
    const idAjustado = id - 1;
    sendIdCard(idAjustado);
    sendShowCard(true);
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function animar(e) {
    e.target.classList.toggle("animate");
  }

  //Função para mudar no JSON Server estado da acomodaçao favorito true or false
  //const toggleFavorite = (id) => {
    //setFavoritos((prevFavoritos) => {
      // Copia o objeto de favoritos anterior e altera o estado do favorito correspondente ao id
      //const novosFavoritos = { ...prevFavoritos };
      //novosFavoritos[id] = !prevFavoritos[id];  // Inverte o valor atual (true/false) diretamente
      //axios.patch(url + id, { favorito: novosFavoritos[id] });
      //console.log(novosFavoritos)
  
      //return novosFavoritos;
    //});
  //};

  if (filterHouses?.length == 0) {
    return (
      <div
        style={{ paddingTop: "180px" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="container-airbnb row">
          <div className="col mt-5">
            <div className="card text-center">
              <div className="card-body">
                Nenhuma acomodação encontrada para esta categoria
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-fluid">
        <div
          style={{ paddingTop: "180px", paddingBottom: "100px" }}
          className="container-airbnb row"
        >
          {filterHouses?.map((acomodacao) => (
            <div
              key={acomodacao.id}
              className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 position-relative mt-4"
            >
              <div
                onClick={(e) => {
                  toggleFavorite(acomodacao.id);
                  animar(e);
                }}
                className={acomodacao.favorito === true ? "animate heartAnimation position-absolute top-0 end-0" : "heartAnimation position-absolute top-0 end-0"}
              ></div>
              <Swiper
                className="img-content"
                pagination={true}
                navigation={true}
                modules={[Pagination, Navigation]}
              >
                {acomodacao.imagens?.map((imagem, index) => (
                  <SwiperSlide key={index} className="swiperImg">
                    <img src={imagem} className="img-fluid cardImage"></img>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div>
                <div
                  onClick={() => cardClick(acomodacao.id)}
                  className="redirecionamento"
                >
                  <p className="d-flex justify-content-between mt-3 mb-0">
                    <span
                      style={{ display: "block", maxWidth: "170px" }}
                      className="fw-bold text-truncate"
                    >
                      {acomodacao.cidade}, {acomodacao.pais}
                    </span>
                    <span>
                      <i className="mdi mdi-star"></i>
                      {acomodacao.nota}
                    </span>
                  </p>
                  <p className="text-muted my-0">
                    {getRandomInt(10, 500)}KM de distancia
                  </p>
                  <p className="text-muted">
                    {getRandomInt(10, 31)} de Out - {getRandomInt(1, 31)} de
                    novembro
                  </p>
                  <p className="fw-bold">
                    R$ {acomodacao.preco?.toLocaleString("pt-BR")} noite
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Card;
