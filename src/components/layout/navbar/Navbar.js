import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link, animateScroll as scroll } from 'react-scroll';
import { enableScroll, disableScroll } from '../../../utils/scroll';

import './navbar.css';
import logo from '../../../images/logo.png';

const Navbar = (props) => {
  useEffect(() => {
    /* Hide Navbar on scroll down (+ CSS) */
    var prevScrollpos = window.pageYOffset;
    function hideNav() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = '0';
      } else {
        document.getElementById('navbar').style.top = '-170px';
      }
      prevScrollpos = currentScrollPos;
    }
    window.onscroll = hideNav;

    return () => {
      document.removeEventListener('scroll', hideNav);
      disableScroll();
    };
  }, []);

  const Burger = () => {
    const [open, setOpen] = useState(false);

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        openMenu(!open);
      }
    };

    useEffect(() => {
      /* Close menu on resize lg*/
      function checkResize() {
        var width = window.innerWidth;
        if (width > 768) {
          if (open) {
            openMenu(false);
          }
        }
      }
      window.onresize = checkResize;

      return () => {
        document.removeEventListener('onresize', checkResize);
      };
    }, [open]);

    const openMenu = (shouldOpen) => {
      if (shouldOpen) {
        disableScroll();
        setOpen(true);
      } else {
        enableScroll();
        setOpen(false);
      }
    };

    return (
      <>
        <div
          className={'btn-container'}
          tabIndex={window.innerWidth <= 768 ? '0' : '-1'} //Can this be done more dynamically? Listener?
          onKeyDown={handleKeyDown}
        >
          <div
            className={open ? 'navbar-btn open' : 'navbar-btn'}
            open={open}
            onClick={() => openMenu(!open)}
            tabIndex='-1'
          >
            <div className='navbar-burger' />
          </div>
        </div>
        <MenuHolder open={open} key='menu' openMenu={openMenu} />
      </>
    );
  };

  const MenuHolder = ({ open, openMenu }) => {
    const node = useRef(null);

    const handleClickOutside = (e) => {
      if (!node.current.contains(e.target)) {
        // clicking on child or other (e.g. navbar)
        return;
      }
      // clicking outside (i.e. the menu holder)
      openMenu(false);
    };

    useEffect(() => {
      if (open) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [open]);

    /*
    useEffect(() => {
      console.log(node);
    }, [node]);
    */

    return (
      <div
        className={`menu-holder ${open ? 'open' : ''}`}
        style={{ display: 'flex' }}
        ref={node}
      >
        <Menu open={open} key='menu' openMenu={openMenu} />
      </div>
    );
  };

  const Menu = ({ open, openMenu }) => {
    return (
      <ul className={open ? 'open' : ''}>
        <li>
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className='nav-item'
            onClick={() => {
              openMenu(false);
            }}
          >
            Om oss
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='project'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className='nav-item'
            onClick={() => {
              openMenu(false);
            }}
          >
            Projekt
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='graphical'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className='nav-item'
            onClick={() => {
              openMenu(false);
            }}
          >
            Grafisk design
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className='nav-item'
            onClick={() => {
              openMenu(false);
            }}
          >
            Kontakt
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <nav className={`navbar dark-nav`} id='navbar'>
      <Link
        to='landing'
        smooth={true}
        offset={0}
        duration={500}
        className='nav-item'
      >
        <div className='navbar-logo'>
          <img src={logo} alt='East Production Logo' />
        </div>
      </Link>

      <Burger key='burger' />
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
