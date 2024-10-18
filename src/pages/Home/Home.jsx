import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/NavBar/Navbar";
import Categorias from "../../components/Categorias/Categorias";
import ModalFilter from "../../components/ModalFilter/ModalFilter";
import Card from "../../components/Card/Card";
import Skeleton from "../../components/Skeleton/Skeleton";
import CardClicado from "../CardClicado/CardClicado";

function App() {
  
  const navElement = 1;

  const [isLoading, setIsLoading] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [catId, setCatId] = useState(1);
  const [type, setType] = useState(0);
  const [allHouses, setAllHouses] = useState([]);
  const [filterHouses, setFilterHouses] = useState([]);
  const [idCard, setIdCard] = useState(0);
  const esqueleto = [1, 2, 3, 4, 5, 6];

  //Funcao para pegar props do componente criança
  function handleIdCard(cardId) {
    setIdCard(cardId);
  }

  function toggleShowCard(showCard){
    setShowCard(showCard)
  }

  //primeira vez que a aplicação rodou chamando API
  useEffect(() => {
    setIsLoading(true);
    async function getInfoCard() {
      axios
        .get("http://localhost:3000/card")
        .then((response) => {
          setAllHouses(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    setTimeout(() => {
      getInfoCard();
    }, 1000);
  }, []);

  //Mostra o que foi puxado da api e em seguida filtra usando a função
  useEffect(() => {
    filterById(catId);
  }, [allHouses]);

  useEffect(() => {
    filterByType(type);
  }, [type]);

  //Mostra o array da api após o filtro
  useEffect(() => {}, [filterHouses]);

  //Função para receber id das categorias
  const changeCat = (id) => {
    setCatId(id);
    filterById(id);
  };

  //Função para receber tipo selecionado do filtro
  const changeType = (type) => {
    setType(type);
    filterByType(type);
  };

  //funçao que filtra o array vindo da Api baseado no id
  const filterById = (id) => {
    const novaLista = allHouses.filter((item) => {
      return item.categoria == id;
    });
    setFilterHouses(novaLista);
  };
  //Funçao para filtrar por preço selecionado no priceSlider
  const filterByPrice = (catId, min, max) => {
    const novaLista = allHouses.filter((item) => {
      if (type === 0) {
        return (
          item.categoria === catId && item.preco >= min && item.preco <= max
        );
      } else {
        return (
          item.categoria === catId &&
          item.preco >= min &&
          item.preco <= max &&
          item.tipo === type
        );
      }
    });
    setFilterHouses(novaLista);
  };

  //Funçao para filtrar por tipo de acomodaçao
  const filterByType = () => {
    const novaLista = allHouses.filter((item) => {
      return item.tipo === type && item.categoria === catId;
    });
    setFilterHouses(novaLista);
  };

  const resetFilter = (id) => {
    filterById(id);
  };

  return (
    <>
      <Navbar dados={navElement} />
      {showCard === false && (
         <Categorias changeCat={changeCat} />
      )}
      {isLoading && (
        <div className="container-airbnb row" style={{ paddingTop: "180px" }}>
          {esqueleto.map((e) => (
            <Skeleton key={e} />
          ))}
        </div>
      )}

      {!isLoading && showCard === false && (
        <div
          children={
            <Card sendIdCard={handleIdCard} sendShowCard={toggleShowCard} filterHouses={filterHouses} />
          }
        />
      )}
      <ModalFilter
        changeType={changeType}
        resetFilter={resetFilter}
        filterByType={filterByType}
        type={type}
        catId={catId}
        filterByPrice={filterByPrice}
        itens={filterHouses}
      />
      {showCard && (
        <div
          onClick={() => setShowCard(false)}
          children={<CardClicado allHouses={allHouses} idCard={idCard} />}
        />
      )}
    </>
  );
}

export default App;
