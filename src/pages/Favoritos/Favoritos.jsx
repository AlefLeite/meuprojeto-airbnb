import React, { useContext, useEffect } from "react";
import "./style.css";
import Navbar from "../../components/NavBar/Navbar";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import { FavoritosContext } from "../../context/FavoritosContext";
import { Link } from "react-router-dom";

const Favoritos = ({ sendIdCard, sendShowCard }) => {
  const navElement = 2;
  const texto = "Você ainda não possui itens favoritos :(";

  const { favoritos, toggleFavorite } = useContext(FavoritosContext);

  const [cardsFavoritos, setCardsFavoritos] = useState([]);
  //const [favoritos, setFavoritos] = useState([])
  const url = "http://localhost:3000/card/";

  useEffect(() => {
    async function getCardFavoritos() {
      axios
        .get("http://localhost:3000/card")
        .then((response) => {
          const acomodacoesFavoritas = response.data.filter(
            (acomodacao) => acomodacao.favorito === true
          );
          setCardsFavoritos(acomodacoesFavoritas);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getCardFavoritos();
  }, []);

  function cardClick(id) {
    const idAjustado = id - 1;
    sendIdCard(idAjustado);
    sendShowCard(true);
    console.log(idAjustado);
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

  if (cardsFavoritos?.length == 0) {
    return (
      <div>
        <Navbar dados={navElement} />
        <div
          style={{ paddingTop: "150px" }}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="container-airbnb row">
            <div className="col mt-3">
              <div className="card text-center">
                <div className="card-body">
                  <div className="centraliza-texto">
                    {texto}
                    <br />
                    <div className="btn-ir-para-inicio">
                      <Link to={"/"}>Ir para Início</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar dados={navElement} />
        <h3>FAVORITOS</h3>
        <div className="container-fluid">
          <div
            style={{ paddingTop: "180px", paddingBottom: "100px" }}
            className="container-airbnb row"
          >
            {cardsFavoritos?.map((acomodacao) => (
              <div
                key={acomodacao.id}
                className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 position-relative mt-4"
              >
                <div
                  onClick={(e) => {
                    toggleFavorite(acomodacao.id);
                    animar(e);
                  }}
                  className={
                    acomodacao.favorito === true
                      ? "animate heartAnimation animate position-absolute top-0 end-0"
                      : "heartAnimation animate position-absolute top-0 end-0"
                  }
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
      </div>
    );
  }
};

export default Favoritos;
