import React from 'react';
import PropTypes from 'prop-types';
import LandingCard from '../../LandingCard';
import AboutCard from '../../AboutCard';
import ProjectCard from '../../ProjectCard';
import GraphicalCard from '../../GraphicalCard';
import ContactCard from '../../ContactCard';

import './main.css';

const Home = (props) => {
  return (
    <div className='home'>
      <LandingCard img={'landing.jpg'} />
      <AboutCard />
      <ProjectCard />
      <GraphicalCard />
      <ContactCard />
    </div>
  );
};

Home.propTypes = {};

export default Home;
