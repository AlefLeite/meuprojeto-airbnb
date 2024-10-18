import React from 'react';
import {useState, useEffect} from 'react';

import "./priceSlider.css";

const PriceSlider = (props) =>{

    const [min,setMin] = useState(props.min);
    const [max,setMax] = useState(props.max);
    const [left,setleft] = useState('0%');
    const [right,setright] = useState('0%');

    function changeRangeMin(e){

        if((parseInt(e.target.value) - max) > -100){
        }else{
            setMin(parseInt(e.target.value));
            if (min == props.min){
                setleft('0%');
            }else{
                var totalBarra = props.max - props.min;
                var qtdSteps = min - props.min;

                setleft(((qtdSteps * 100) /totalBarra) + '%' );
            }
        }

    }

    useEffect(()=>{
        if(min == props.min){
            document.getElementById('input-min').value = props.min
        }else{
            document.getElementById('input-min').value = min
        }
        props.filterByPrice(props.catId, min, max);
    },[min])

    function changeRangeMax(e){

        if((parseInt(e.target.value) - min) < 110){
        } else{
            setMax(parseInt(e.target.value));
            if (max == props.max){
                setright('0%');
            }else{
                var totalBarra = props.max - props.min;
                var qtdSteps = props.max - max;

                setright(((qtdSteps * 100) /totalBarra) + '%' );
        }
    }

    }

    useEffect(()=>{
        if(max == props.max){
            document.getElementById('input-max').value = props.max + '+';
        }else{
            document.getElementById('input-max').value = max;
        }
        props.filterByPrice(props.catId, min, max);
    }, [max])

    function validacao(e){

        let inputMin = document.getElementById('input-min');

        let inputMax = document.getElementById('input-max');
        //PEGAR VALOR DO CAMPO INPUT
        let valor = parseInt(e.target.value);

        //SE O CAMPO INPUT FOR O VALOR MINIMO
        if(e.target.id == 'input-min'){
            //VERIFICAR SE CAMPO ESTA VAZIO OU NULO
            if (e.target.value == "" || e.target.value == null){
                setMin(props.min);
                setleft('0%');
                
                //Mudar valor do campo input para valor minimo
                inputMin.value = (props.min);
            } else{
                //SE VALOR MENOR QUE O MINIMO PERMITIDO
            if (valor < props.min){
                setMin(props.min);
                setleft('0%');
                
                //Mudar valor do campo input para valor minimo
                inputMin.value = (props.min);
            }else{
                //VERIFICAR SE O MINIMO É MENOR QUE O MAXIMO 
                if((valor + 100) >= max){
                    let corrige = max -100;
                    setMin(corrige);

                    //MOVIMENTA A BARRA
                    var totalBarra = props.max - props.min;
                    var qtsSteps = valor - props.min;

                    setleft(((qtsSteps * 100) / totalBarra) + '%');
                    
                    inputMin.value = corrige;
                } else{
                    //SE TUDO ESTIVER CERTO 
                    setMin(valor);

                    //MOVIMENTA A
                    var totalBarra = props.max - props.min;
                    var qtsSteps = valor - props.min;

                    setleft(((qtsSteps * 100) / totalBarra) + '%');

                }

            }

            }
        } else{
            if (e.target.id = 'input-max'){
                if (e.target.value == "" || e.target.value == null){
                    setMax(props.max);
                    setright('0%');
                } else{
                    if (valor > props.max){
                        setMax(props.max);
                        setright('0%');
        
                        inputMax.value = props.max + '+';
                    } else{
                        //VALOR DIGITADO MENOR QUE O MAXIMO PERMITIDO
                        if((valor + 100) <= min){
                            let corrige = min + 100;
                            setMax(corrige);
        
                            var totalBarra = props.max - props.min;
                            var qtdSteps = props.max - valor;
        
                            setright(((qtdSteps * 100) / totalBarra) + '%');
                            inputMax.value = corrige;
                        }else{
                            //SE O VALOR FOR MAIOR QUE O MINIMO 
                            setMax(valor);
        
                            var totalBarra = props.max - props.min;
                            var qtdSteps = props.max - valor;
        
                            setright(((qtdSteps * 100) / totalBarra) + '%');
        
                        }

                }
                

        }

       

            }

        }
    }

    //VALIDA SE O QUE FOI DIGITADO NO CAMPO INPUT SÃO NUMEROS 
    function soNumero(e){
        if (!/[0-9]/.test(e.key)){
            e.preventDefault();
        }
    }

  return (
    <div>
        <div className="slider">
            <div style={{left:left, right:right}} className='progress'>
            </div>
            <div className='range-input'>
                <input id='rangeMin' onChange={changeRangeMin} type='range' min={props.min} max={props.max} value={min} step={props.step}/>
                <input id='rangeMax' onChange={changeRangeMax} type='range' min={props.min} max={props.max} value={max} step={props.step}/>
                </div>
        </div>
        <div className='row mt-4'>
                <div className='col'>
                    <label className='text-muted'>Preço minimo</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">R$</span>
                        <input onBlur={validacao} onKeyPress={(e) => {(e.key == 'Enter' ? validacao(e) : soNumero(e))}} id='input-min' type="text" className="form-control" placeholder="Min"/>
                    </div>
                </div>
                <div className='col'>
                    <label className='text-muted'>Preço maximo</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">R$</span>
                        <input onBlur={validacao} onKeyPress={(e) => {(e.key == 'Enter' ? validacao(e) : soNumero(e))}} id='input-max' type="text" className="form-control" placeholder="Max"/>
                    </div>
                    </div>
                </div>
    </div>
  )
}

export default PriceSlider;
