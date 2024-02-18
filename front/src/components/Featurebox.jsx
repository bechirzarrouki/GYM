import React from 'react';

function Featurebox(props) {
    return (
      <div className='a-box'>
        <div className='a-b-img'>
          <img src={props.imageSrc} alt='' />
        </div>
        <div className='a-b-text'>
          <h2>{props.featureTitle}</h2>
          <p>IMEN</p>
        </div>
      </div>
    );
  }
  

export default Featurebox;
