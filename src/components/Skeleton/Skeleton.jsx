import React, { useState } from 'react'

const Skeleton = () => {


  return (
    <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 position-relative mt-4">
        <div className='card border-0'>
            <div className='placeholder-glow'>
                <p style={{width:'100%', height: '260px'}} className='placeholder rounded'></p>
            </div>
            <h5 className='d-flex justify-content-between placeholder-glow rounded'>
                <span className='placeholder col-8 rounded'></span>
                <span className='placeholder col-2 me-2 rounded'></span>
            </h5>
            <p className='placeholder-glow'>
                <span className='placeholder col-9 rounded'></span>
                <span className='placeholder col-8 rounded'></span>
                <span className='placeholder col-7 rounded'></span>
            </p>
        </div>
    </div>
  )
}

export default Skeleton;
