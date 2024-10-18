import React from 'react';

import { useState } from 'react';

import './styles.css';

const CardGroup = ({options}) => {

    const [clickedId, setCLickedId] = useState(-1);

    const handleCliked = (e, i) =>{
        setCLickedId(i);
    }


  return (
    <div className='row mt-4'>
        {
            options.map((item, i) => (
                <div key={i} className='col'>
                    <div onClick={(e) => handleCliked(e,i)} className={i === clickedId ? "cardGroup active" : "cardGroup"}>
                        <i className={item.icon}></i>
                        <p className='text-truncate'>{item.text}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default CardGroup;
