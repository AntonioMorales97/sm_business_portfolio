import React from 'react';
import PropTypes from 'prop-types';

import TypeWriter from '../TypeWriter';

import './landing-card.css';

const LandingCard = (props) => {
  const words = ['Foto', 'Film', 'Grafisk design'];

  return (
    <div className='landing-card' id='landing'>
      <div className='welcome'>
        <TypeWriter title={'East Production'} words={words} />
      </div>
    </div>
  );
};

LandingCard.propTypes = {};

export default LandingCard;
