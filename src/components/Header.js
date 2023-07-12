import React from 'react';

const Header = () => {
  return (
    <div  style={{ display: 'flex' , marginBottom: '1rem' }}>
      <img
        style={{
          width: '5rem',
          height: '3.75rem',
          borderRadius: '0.3125rem',
          marginLeft: '0.625rem',
          marginRight: '1.875rem'
        }}
        src={require('./images/logo1.jpg')}
        alt="Logo 1"
      />
      <img
        style={{
          width: '5rem',
          height: '3.75rem',
          borderRadius: '0.3125rem'
        }}
        src={require('./images/iitr_logo.jpg')}
        alt="IITR Logo"
      />
    </div>
  );
};

export default Header;
