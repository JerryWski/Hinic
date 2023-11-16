import React, { useState, useEffect } from 'react';
import './Header.css';
import { useMediaQuery } from '../../utils/useMediaQuery';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const matches = useMediaQuery('(min-width: 900px)');

  const handleMenuClick = () => {
    if (matches) {
      return;
    }
    setToggle(false);
    setMenuClicked(true);
  };

  // overflow hidden check is toggle is true
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [toggle]);

  //animatons
  const container = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'linear',
        staggerChildren: 0.01,
      },
    },
  };
  const item = {
    hidden: { opacty: 0, y: -10 },
    show: { opacty: 1, y: 0 },
  };

  return (
    <header>
      <nav className='nav-container'>
        <a className='logo-link-desktop' href='/'>
          <div className='logo-wrapper-mobile'>
            <img className='logo' src='/base-logo.png' alt='logo-icon' />
          </div>
        </a>

        <div className='contact-wrapper'>
          <a
            className='contact-icon'
            href='mailto:office@hinic.eu'
            aria-label='Link to email'
          >
            <i className='fa-solid fa-envelope'></i>
          </a>
          <a
            className='contact-icon'
            href='tel:+48888433188'
            aria-label='phone-link'
          >
            <i className='fa-solid fa-phone'></i>
          </a>
        </div>
        <a className='logo-link-mobile' href='/'>
          <div className='logo-wrapper'>
            <img src='/base-logo.png' alt='logo-icon' />
          </div>
        </a>
        {matches && (
          <div className='nav-links'>
            
            <a className='link' href='/about'>
              O Nas
            </a>
            <a className='link' href='/products'>
              Produkty
            </a>
            <a className='link' href='/orders'>
              Zamówienia
            </a>
            <a className='link' href='#contact'>
              Kontakt
            </a>
          </div>
        )}

        {!matches && (
          <div
            onClick={() => setToggle((prevToggle) => !prevToggle)}
            className='hamburger'
          >
            <motion.span
              animate={{ rotateZ: toggle ? 45 : 0, y: toggle ? 8 : 0 }}
              className='burger-line'
            ></motion.span>
            <motion.span
              animate={{ width: toggle ? 0 : 32 }}
              className='burger-line'
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: toggle ? -45 : 0,
                y: toggle ? -8 : 0,
                width: toggle ? 34 : 28,
              }}
              className='burger-line'
            ></motion.span>
          </div>
        )}
        {toggle && !matches && (
          <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            exit={{ opacity: 0 }}
            className='nav-links-mobile'
          >
            <motion.a
              variants={item}
              className='link-mobile'
              href='/about'
              onClick={handleMenuClick}
            >
              O Nas
            </motion.a>
            <motion.a
              variants={item}
              className='link-mobile'
              href='/products'
              onClick={handleMenuClick}
            >
              Produkty
            </motion.a>
            <motion.a
              variants={item}
              className='link-mobile'
              href='/orders'
              onClick={handleMenuClick}
            >
              Zamówienia
            </motion.a>
            <motion.a
              variants={item}
              className='link-mobile'
              href='/blog'
              onClick={handleMenuClick}
            >
              Kontakt
            </motion.a>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
