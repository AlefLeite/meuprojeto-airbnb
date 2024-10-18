import React from 'react';
import { useState } from 'react';

import './buttonGroup.css';
import { click } from '@testing-library/user-event/dist/click';

const ButtonGroup = ({buttons}) => {

    const [clickedId, setCLickedId] = useState(-1);

    const handleCliked = (e, i) =>{
        setCLickedId(i);
    }

  return (
    <div className='row mb-4'>
        {
            buttons.map((buttonLabel, i) => (
                <div key={i} className={i == 0 ? 'col-3' : 'col'}>
                    <button key={i} onClick={(e) => handleCliked(e,i)} className={i === clickedId || clickedId == -1 && buttonLabel == 'Qualquer um' ? 'w-100 btn-especial active' : 'w-100 btn-especial'}>
                    {buttonLabel}
                    </button>
                    </div>
            ))
        }
    </div>
  )
}

export default ButtonGroup;
