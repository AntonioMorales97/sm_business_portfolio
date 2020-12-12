import React from 'react';
import PropTypes from 'prop-types';
import DesignCard from './DesignCard';

import Twitch from '../../images/design/twitch.png';
import Disney from '../../images/design/disney.png';
import Dpd from '../../images/design/dpd.png';
import Pandora from '../../images/design/pandora.png';
import Twitter from '../../images/design/twitter.png';
import Viber from '../../images/design/viber.png';

import './graphical-card.css';

const GraphicalCard = (props) => {
  return (
    <div id='graphical' className='grid'>
      <div className='col-md-12 col-lg-6'>
        <DesignCard image={Twitch} />
      </div>
      <div className='col-md-12 col-lg-6'>
        <DesignCard image={Disney} />
      </div>
      <div className='col-md-12 col-lg-6'>
        <DesignCard image={Dpd} />
      </div>
      <div className='col-md-12 col-lg-6'>
        <DesignCard image={Pandora} />
      </div>
      <div className='col-md-12 col-lg-6'>
        <DesignCard image={Twitter} />
      </div>
      <div className='col-md-12 col-lg-6'>
        <DesignCard image={Viber} />
      </div>
    </div>
  );
};

GraphicalCard.propTypes = {};

export default GraphicalCard;
