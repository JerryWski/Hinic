import React from "react";
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = (): number => {
    return new Date().getFullYear();
  };

  return (
    <>
      <div className='footer'>
        <span className="footer_overline"></span>
        <p className="footer_text">
          created by{' '}
          <a
            className="footer_link"
            href='https://jerrywski.github.io/Portfolio-Site/'
          >
            <span className='footer-name'>Jerry_Wski</span> 
          </a>
        </p>
        <p className="footer_year">© Copyright {currentYear()}</p>
      </div>
    </>
  );
};

export default Footer;
