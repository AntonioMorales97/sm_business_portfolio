import React from 'react';
import PropTypes from 'prop-types';

import './about-card.css';

const AboutCard = (props) => {
  return (
    <div className='about-hero' id='about'>
      <div className='dark-overrrlay'>
        <div className='container'>
          <div className='about-hero-container'>
            <div className='about-hero-card'>
              <h1>Om oss</h1>
              <hr />
              <p>
                Vi är några vänner med stor passion för fotografi, film och
                grafisk design som ledde till att vi startade East Production
                2018. Sedan dess har vi strävat efter perfektion för att få de
                nöjdaste kunderna!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutCard.propTypes = {};

export default AboutCard;
