import React from 'react';
import PropTypes from 'prop-types';

import './design-card.css';

const DesignCard = ({ image }) => {
  return (
    <div className='parent'>
      <div className='inner' style={{ backgroundImage: `url(${image})` }}></div>
    </div>
  );
};

DesignCard.propTypes = {};

export default DesignCard;
