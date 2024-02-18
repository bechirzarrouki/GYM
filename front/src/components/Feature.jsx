import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';
function Feature() {
    return (
      <div id='features'>
        <h1>FEATURES</h1>
        <div className='a-container'>
          <Featurebox key={1} imageSrc={fimage1} featureTitle="weightlifting" />
          <Featurebox key={2} imageSrc={fimage2} featureTitle="specific muscle" />
          <Featurebox key={3} imageSrc={fimage3} featureTitle="flex" />
          <Featurebox key={4} imageSrc={fimage4} featureTitle="cardio exercice" />
        </div>
      </div>
    );
}

export default Feature;
