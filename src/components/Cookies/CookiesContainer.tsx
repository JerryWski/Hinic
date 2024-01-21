/* eslint-disable @typescript-eslint/restrict-template-expressions */
import './CookiesContainer.css';
import React, { useEffect, useState } from 'react';

const CookiesContainer: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (!localStorage.getItem('cookiesBannerDisplayed')) {
      const timer = setTimeout(() => {
        setIsActive(true);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  const handleAcceptClick: () => void = () => {
    setIsActive(false);
    localStorage.setItem('cookiesBannerDisplayed', 'true');
  };
  const handleRefuseClick: () => void = () => {
    setIsActive(false);
  };

  return (
    <section>
      <div className={`cookies_container ${isActive ? 'active' : ''}`}>
        <div className='cookies_wrapper'>
          <div className='cookies'>
            <h3 className='cookies_heading'>
              We use cookies to provide you with the highest level of service
              level
            </h3>
            <p className='cookies_text'>
              By clicking &apos;I agree&apos; you accept to our use of cookies
              by us. Read our{' '}
              <a className='cookies_link' href='/polityka'>
              Privacy Policy
              </a>
              .
            </p>
          </div>
          <div className='button-container'>
            <button
              role='button'
              aria-label='cookies-button'
              onClick={handleAcceptClick}
              className='cookies_button'
            >
              I agree
            </button>
            <button
              role='button'
              aria-label='cookies-button'
              onClick={handleRefuseClick}
              className='cookies_button'
            >
              I disagree
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiesContainer;
