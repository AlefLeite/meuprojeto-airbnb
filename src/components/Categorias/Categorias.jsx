import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './categorias.css';
import { Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';


const Categorias = ({ changeCat }) => {

  const [idClicado, setIdClicado] = useState(1);

  const handleClick = (e, id) => {
    setIdClicado(id);
    changeCat(id);
  }

  const url = 'http://localhost:3000/categorias';

  const [categorias, setCategorias] = useState([])

  useEffect(() =>{
    async function getCategorias() {
      axios.get(url)
        .then(response => {
          setCategorias(response.data)
        })
        .catch(e => {
          console.log('Erro');
          console.log(e);
        })
        .finally(f =>{
        })

    }
    getCategorias();
  },[])

  return (
    <div style={{ position: 'fixed', top: 0, paddingTop: '80px', zIndex: '5' }} className='container-fluid align-items-center border border-sanger bg-white'>
      <div className='container-airbnb-cat d-flex align-items-center border boder-info row '>
        <div className='col-sm-11'>
          <Swiper

            breakpoints={{
              100: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 1
              },
              //Janela maior que 576(sm)
              576: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 4
              },
              //janela maior que 768 (md)
              768: {
                slidesPerView: 6,
                slidesPerGroup: 6,
                spaceBetween: 7
              },
              //janela maior que 992
              992: {
                slidesPerView: 8,
                slidesPerGroup: 8,
                spaceBetween: 7
              },
              //janela maior que 1200
              1200: {
                slidesPerView: 8,
                slidesPerGroup: 8,
                spaceBetween: 7
              },
              //janela maior que 1400
              1400: {
                slidesPerView: 10,
                slidesPerGroup: 10,
                spaceBetween: 7
              },
              //janela maior que 1600
              1600: {
                slidesPerView: 14,
                slidesPerGroup: 13,
                spaceBetween: 7
              }
            }}
            pagination={false}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {
              categorias.map((dados, index) => (
                <SwiperSlide
                  key={dados.id}
                  virtualIndex={index}
                  className={dados.id === idClicado ? 'active' : ''}
                  onClick={(e) => handleClick(e, dados.id)}
                >
                  <img alt='Imagem do local' className='mb-2' src={dados.imagem} />
                  <span>{dados.titulo}</span>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className='col-sm-1'>
          <button className='d-none d-lg-none d-md-flex btn btn-filtro float-end w-100 justify-content-center' data-bs-toggle="modal" data-bs-target="#ModalFilter">
            <i className='mdi mdi-filter-variant me-2'></i></button>
          <button className='d-none d-lg-flex btn btn-filtro d-flex float-end' data-bs-toggle="modal" data-bs-target="#ModalFilter">
            <i className='mdi mdi-filter-variant me-2'></i>
            Filtros
          </button>

        </div>
      </div>
    </div>
  )
}

export default Categorias;
