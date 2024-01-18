import React from 'react';
import "./Prices.css"
import { Icon } from '@iconify/react';

const Prices = () => {
  return (
    <div className='container'>
      <h2 className='prices-header'>Cenniki</h2>
      <div className='prices-wrapper'>
        <div className='header-wrapper'>
          <h3>* Dodatki, kannaboidy, izolaty *</h3>
          <a
            className='prices-link'
            download='/additions.pdf'
            href='/additions.pdf'
          >
            - Ściągnij plik .pdf -
            <Icon className='icon' icon='download' width={30} />
          </a>
        </div>
        <div>
          <img
            className='img one'
            src='src/assets/additions.webp'
            alt='prices-list'
          />
        </div>

        <div className='header-wrapper'>
          <h3>* Aromaty *</h3>
          <a
            className='prices-link'
            download='/prices-basic.pdf'
            href='/prices-basic.pdf'
          >
            - Ściągnij plik .pdf -
            <Icon className='icon' icon='download' width={30} />
          </a>
        </div>
        <div className='prices-two'>
          <img
            className='img two'
            src='src/assets/prices-basic-1.webp'
            alt='prices-list'
          />
          <img
            className='img three'
            src='src/assets/prices-basic-2.webp'
            alt='prices-list'
          />
          <img
            className='img four'
            src='src/assets/prices-basic-3.webp'
            alt='prices-list'
          />
        </div>

        <div className='header-wrapper'>
          <h3>* Aromaty(rabaty) *</h3>
          <a
            className='prices-link'
            download='/prices-disc.pdf'
            href='/prices-disc.pdf'
          >
            - Ściągnij plik .pdf -
            <Icon className='icon' icon='download' width={30} />
          </a>
        </div>
        <div>
          <img
            className='img four'
            src='../../assets/prices-basic-3.webp'
            alt='prices-list'
          />
        </div>
      </div>
    </div>
  );
};

export default Prices;
