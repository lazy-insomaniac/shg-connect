import React from 'react';

const Catalogbar = () => {
  return (
    <div className='items  justify-center' style={{ height: '7rem', background: 'rgba(93.21, 86.42, 143.64, 0.40)', borderRadius: '0.5625rem',display:'flex' }}>
      <div style={{display:'block'}}>
      <a href='/' className='items justify-centers text-light' >
        <img src={require('./images/food-transformed.png')} style={{ height: '2.5rem', width: '3.75rem', objectFit: 'cover', margin: '1.25rem 7rem' }} alt="eatables" />
      </a>
      <p>EATABLES</p>
      </div>
      <div style={{display:'block'}}>
      <a href='/' className='items justify-centers text-light'>
        <img src={require('./images/WIP.png')} style={{ width: '3.75rem', objectFit: 'cover', margin: '0.80rem 5rem' }} alt="handicrafts" />
      </a>
      <p>HANDICRAFTS</p>
      </div>
      <div style={{display:'block'}}>
      <a href='/' className='items justify-centers text-light'>
        <img src={require('./images/boot.png')} style={{ height: '2.5rem', width: '3.75rem', objectFit: 'cover', margin: '1.25rem 5rem' }} alt="fashion" />
      </a>
      <p>FASHION</p>
      </div>
      <div style={{display:'block'}}>
      <a href='/' className='items justify-centers text-light'>
        <img src={require('./images/Star.png')} style={{ height: '2.5rem', width: '3.75rem', objectFit: 'cover', margin: '1.25rem 5rem' }} alt="others" />
      </a>
      <p>OTHERS</p>
      </div>
      <div style={{display:'block'}}>
      <a href='/' className='items justify-centers text-light'>
        <img src={require('./images/feedback.png')} style={{ height: '2.5rem', width: '3.75rem', objectFit: 'cover', margin: '1.25rem 5rem' }} alt="feedback" />
      </a>
      <p>FEEDBACK</p>
      </div>
    </div>
  );
};

export default Catalogbar;

