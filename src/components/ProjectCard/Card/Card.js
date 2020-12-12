import React from 'react';
import PropTypes from 'prop-types';

import './card.css';

const Card = ({ image, title, name, info, darkerInfo, routeName }) => {
  return (
    <div className='card' style={{ backgroundImage: `url(${image})` }}>
      <div className='info-holder'>
        <h2 className='title'>{title}</h2>
        <div className='name'>
          <span className='head'>Project | </span>
          <span>{name}</span>
        </div>
        <div className='info'>
          <span className='head'>Info | </span>
          <span>{info}</span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
