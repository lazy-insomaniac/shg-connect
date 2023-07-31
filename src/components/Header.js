import React from 'react';

const Header = () => {
  return (
    <div  style={{ display: 'flex' ,marginTop:'1.2rem' }}>
      <img
        style={{
          width: '3rem',
          height: '2rem',
          borderRadius: '0.3125rem',
          marginLeft: '0.325rem',
          marginRight: '0.875rem'
        }}
        src={require('./images/logo1.jpg')}
        alt="Logo 1"
      />
      <img
        style={{
          width: '  3rem',
          height: '2rem',
          borderRadius: '0.3125rem'
        }}
        src={require('./images/iitr_logo.jpg')}
        alt="IITR Logo"
      />
    </div>
  );
};

export default Header;
