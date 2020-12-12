import React from 'react';
import PropTypes from 'prop-types';

import {
  AiTwotonePhone,
  AiTwotoneMail,
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from 'react-icons/ai';

import Logo from '../../images/logo.png';

import './contact-card.css';

const ContactCard = (props) => {
  return (
    <div id='contact' className='grid'>
      <div className='col-md-12 col-lg-6 holder'>
        <div className='phone-info'>
          <span>
            Telefon{' '}
            <span className='icon'>
              <a href='tel:+4671234567' className='contact-link'>
                <AiTwotonePhone />
              </a>{' '}
            </span>{' '}
            |{' '}
          </span>
          <span>(+46)7 123 45 67 </span>
        </div>
        <div className='email-info'>
          <span>
            E-post{' '}
            <span className='icon'>
              <a
                className='contact-link'
                href='mailto:noreply@eastproduction.se'
              >
                <AiTwotoneMail />
              </a>{' '}
            </span>
            |{' '}
          </span>
          <span>noreply@eastproduction.se</span>
        </div>
        <div className='social-media'>
          <div className='social-icon'>
            <a
              className='contact-link'
              href='https://www.instagram.com'
              target='_blank'
            >
              <AiFillInstagram />
            </a>
          </div>
          <div className='social-icon'>
            <a
              className='contact-link'
              href='https://www.facebook.com'
              target='_blank'
            >
              <AiFillFacebook />
            </a>
          </div>
          <div className='social-icon'>
            <a
              className='contact-link'
              href='https://www.twitter.com'
              target='_blank'
            >
              <AiFillTwitterSquare />
            </a>
          </div>
          <div className='social-icon'>
            <a
              className='contact-link'
              href='https://www.linkedin.com'
              target='_blank'
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className='col-md-12  col-lg-6 holder'>
        <div className='logo' style={{ backgroundImage: `url(${Logo})` }}></div>
      </div>
    </div>
  );
};

ContactCard.propTypes = {};

export default ContactCard;
