import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

import Car from '../../images/projects/car.jpg';
import Dolphins from '../../images/projects/dolphins.jpg';
import Beach from '../../images/projects/beach.jpg';
import Beer from '../../images/projects/beer.jpg';
import Skiing from '../../images/projects/skiing.jpg';
import Christmas from '../../images/projects/christmas.jpg';
import Sprint from '../../images/projects/sprint.jpg';

import './project-card.css';

const ProjectCard = (props) => {
  return (
    <div id='project' className='grid'>
      <div className='project-card col-md-12 col-lg-8'>
        <Card image={Car} title='Motors' name='Cars' info='Dröm på hjul' />
      </div>
      <div className='project-card col-md-12 col-lg-4'>
        <Card
          image={Dolphins}
          title='Ocean'
          name='Dolphins'
          info='Havets vänner'
        />
      </div>
      <div className='project-card col-md-12 col-lg-4'>
        <Card image={Beer} title='Beverages' name='Beer' info='Kall öl' />
      </div>
      <div className='project-card col-md-12 col-lg-8'>
        <Card image={Sprint} title='Sports' name='OS' info='100 meter' />
      </div>
      <div className='project-card col-md-12 col-lg-6'>
        <Card image={Skiing} title='Snow' name='Skiing' info='Alperna' />
      </div>
      <div className='project-card col-md-12 col-lg-6'>
        <Card image={Beach} title='Tropical' name='Paradise' info='Jamaica' />
      </div>
      <div className='project-card col-md-12 col-lg-12'>
        <Card
          image={Christmas}
          title='Winter'
          name='Christmas'
          info='Jul med familj'
        />
      </div>
    </div>
  );
};

ProjectCard.propTypes = {};

export default ProjectCard;
