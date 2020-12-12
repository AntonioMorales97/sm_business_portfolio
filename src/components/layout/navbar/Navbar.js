import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link, animateScroll as scroll } from 'react-scroll';
import './navbar.css';
import logo from '../../../images/logo.png';

const Navbar = (props) => {
  const [scrollState, setScrollState] = useState('top');

  // const [burgerOpen, setBurgerOpen] = useState(false);

  /*
  useEffect(() => {
    let listener = document.addEventListener('scroll', (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 170) {
        if (scrollState !== 'body') {
          setScrollState('body');
        }
      } else {
        if (scrollState !== 'top') {
          setScrollState('top');
        }
      }
    });

    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, []);
  */

  useEffect(() => {
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
    /*
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = '0';
      } else {
        document.getElementById('navbar').style.top = '-170px';
      }
      prevScrollpos = currentScrollPos;
    };
    */
    window.onscroll = hideNav;
    return () => {
      document.removeEventListener('scroll', hideNav);
    };
  }, []);

  const Burger = () => {
    const [open, setOpen] = useState(false);

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        setOpen(!open);
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
            onClick={() => setOpen(!open)}
            tabIndex='-1'
          >
            <div className='navbar-burger' />
          </div>
        </div>
        <MenuHolder open={open} key='menu' openMenu={setOpen} />
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

    useEffect(() => {
      console.log(node);
    }, [node]);

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
    const closeMenu = () => {
      openMenu(false);
    };

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
              closeMenu();
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
              closeMenu();
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
              closeMenu();
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
              closeMenu();
            }}
          >
            Kontakt
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <nav
      className={`navbar ${scrollState === 'top' ? 'dark-nav' : 'light-nav'}`}
      id='navbar'
    >
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
