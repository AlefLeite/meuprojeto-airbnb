import React, { useState } from 'react'
import PriceSlider from '../PriceSlider/PriceSlider';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import CardGroup from '../CardGroup/CardGroups';

const ModalFilter = ({ resetFilter, catId, filterByPrice, changeType,itens}) => {

  const buttonsOption = ["Qualquer um","1","2","3","4","5","6","7","8+"];

  const toggleClickTipo = (tipo) => {
    changeType(tipo)
  }


  return (
    <div className="modal fade" id="ModalFilter" tabIndex="-1">
  <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header text-center">
        <button type="button" className="btn-close opacity-100" data-bs-dismiss="modal" aria-label="Close"></button>
        <h5 className="modal-title w-100 fw-bold">Filtros</h5>
      </div>
      <div className="modal-body">
        <section className='px-2 mb-4 border-bottom'>
            <span className='fw-bold'>Faixa de preço</span>
            <p className='text-muted'>O preço medio por noite é R$730</p>
            <PriceSlider catId={catId} filterByPrice ={filterByPrice} min={50} max={2000} step={1}/>
        </section>
        <section className='px-2 mb-4 border-bottom'>
            <span className='fw-bold'>Tipo de Lugar</span>
            <div className='row mt-4'>
                <div className='col-md-6 mb-4'>
                    <div className="form-check ms-3">
                        <input onClick={() => {toggleClickTipo(1)}} className="fs-4 form-check-input" name='tipoDeQuarto' type="radio" value={1} id="inteiro"/>
                        <label className="ps-2 form-check-label" htmlFor="inteiro">
                            Espaço Inteiro <br/>
                            <small className='text-muted'>Um lugar só para você</small>
                        </label>
                        
                    </div>
                </div>
                <div className='col-md-6 mb-4'>
                    <div className="form-check ms-3">
                        <input onClick={() => {toggleClickTipo(2)}} className="fs-4 form-check-input" name='tipoDeQuarto'  type="radio" value={2} id="quartointeiro"/>
                        <label className="ps-2 form-check-label" htmlFor="quartointeiro">
                            Quarto Inteiro <br/>
                            <small className='text-muted'>Seu próprio quarto em uma casa ou hotel, alé de lguns espaços comuns compartilhados</small>
                        </label>
                        
                    </div>
                </div>
                <div className='col-md-6 mb-5'>
                    <div className="form-check ms-3">
                        <input onClick={() => {toggleClickTipo(3)}} className="fs-4 form-check-input" name='tipoDeQuarto'  type="radio" value={3} id="quartocompartilhado"/>
                        <label className="ps-2 form-check-label" htmlFor="quartocompartilhado">
                            Quarto Compartilhado <br/>
                            <small className='text-muted'>Um espaço para dormir e áreas comuns que podem ser compartilhados com outras pessoas</small>
                        </label>
                    </div>
                    <br/>
                </div>
            </div>
        </section>
        <section className='px-2 mb-4 border-bottom'>
            <span className='fw-bold'>Quartos e camas</span>
            <p className='mt-3 px-1'>Quartos</p>
            <ButtonGroup buttons={buttonsOption}/>
            <p className='mt-3 px-1'>Camas</p>
            <ButtonGroup buttons={buttonsOption}/>
            <p className='mt-3 px-1'>Banheiros</p>
            <ButtonGroup buttons={buttonsOption}/>
        </section>
        <section className='px-2 mb-5'>
            <span className='fw-bold'>Tipo de propriedade</span>
            <CardGroup options={[
                {icon: "mdi mdi-home-outline",text: 'Casa'},
                {icon: "mdi mdi-city-variant-outline",text: 'Apartamento'},
                {icon: "mdi mdi-home-import-outline",text: 'Casa de Hospedes'},
                {icon: "mdi mdi-office-building-outline",text: 'Hotel'},
            ]}/>
        </section>
      </div>
      <div className="d-flex justify-content-between modal-footer">
        <a href='#' onClick={() => {resetFilter(catId)}} className='ps-2 link-dark fw-bold' data-bs-dismiss="modal">Remover Filtros</a>
        <button type="button" className="fw-bold px-4 py-3 btn btn-dark" data-bs-dismiss="modal">Mostrar {itens.length} acomodações</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default ModalFilter;

