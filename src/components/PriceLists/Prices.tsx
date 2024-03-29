import React from 'react';
import "./Prices.css"
import { Icon } from '@iconify/react';

const Prices = () => {
  return (
    <div className='container'>
      <h2 className='prices-header'>Pricelists</h2>
      <div className='prices-wrapper'>
        <div className='header-wrapper'>
          <h3>* Supplements, cannabinoids, isolates *</h3>
          <a
            className='prices-link'
            download='/additions.pdf'
            href='/additions.pdf'
          >
            - Download file in .pdf format -
            
            <Icon icon="flat-color-icons:download" />
          </a>
        </div>
        <div>
          <img
            className='img one'
            src='/images/additions.webp'
            alt='prices-list'
          />
        </div>

        <div className='header-wrapper'>
          <h3>* Flavours *</h3>
          <a
            className='prices-link'
            download='/prices-basic.pdf'
            href='/prices-basic.pdf'
          >
            - Download file in .pdf format -
            <Icon icon="flat-color-icons:download" />
          </a>
        </div>
        <div className='prices-two'>
          <img
            className='img two'
            src='/images/prices-basic-1.webp'
            alt='prices-list'
          />
          <img
            className='img three'
            src='/images/prices-basic-2.webp'
            alt='prices-list'
          />
          <img
            className='img four'
            src='/images/prices-basic-3.webp'
            alt='prices-list'
          />
        </div>

        <div className='header-wrapper'>
          <h3>* Flavours(discounts) *</h3>
          <a
            className='prices-link'
            download='/prices-disc.pdf'
            href='/prices-disc.pdf'
          >
            - Download file in .pdf format -
            <Icon icon="flat-color-icons:download" />
          </a>
        </div>
        <div className='prices-two'>
          <img
            className='img five'
            src='/images/prices-disc-1.webp'
            alt='prices-list'
          />
          <img
            className='img six'
            src='/images/prices-disc-2.webp'
            alt='prices-list'
          />
          <img
            className='img seven'
            src='/images/prices-disc-3.webp'
            alt='prices-list'
          />
          <img
            className='img eight'
            src='/images/prices-disc-4.webp'
            alt='prices-list'
          />
        </div>
      </div>
    </div>
  );
};

export default Prices;
