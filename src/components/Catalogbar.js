import React from 'react';

const Catalogbar = () => {
  return (
    <div className='flex items justify-between' style={{ height: '5rem', background: 'rgba(93.21, 86.42, 143.64, 0.40)', borderRadius: '0.5625rem' }}>
      <a href='/' className='items justify-centers text-light'>
        <img src={require('./images/food-transformed.png')} style={{ height: '2.5rem', width: '3.75rem', objectFit: 'cover', margin: '1.25rem 2.5rem' }} alt="eatables" />
        EATABLES
      </a>
      <a href='/' className='items justify-centers text-light'>
        <img src={require('./images/WIP.png')} style={{ width: '3.75rem', objectFit: 'cover', margin: '1.25rem 2.5rem' }} alt="handicrafts" />
        HANDICRAFTS
      </a>
      <a href='/' className='items justify-centers text-light'>
        <img src={require('./images/boot.png')} style={{ height: '2.5rem', width: '3.75rem', objectFit: 'cover', margin: '1.25rem 2.5rem' }} alt="fashion" />
        FASHION
      </a>
      <a href='/' className='items justify-centers text-light'>
        <img src={require('./images/Star.png')} style={{ height: '2.5rem', width: '3.75rem', objectFit: 'cover', margin: '1.25rem 2.5rem' }} alt="others" />
        OTHERS
      </a>
      <a href='/' className='items justify-centers text-light'>
        <img src={require('./images/feedback.png')} style={{ height: '2.5rem', width: '3.75rem', objectFit: 'cover', margin: '1.25rem 2.5rem' }} alt="feedback" />
        FEEDBACK
      </a>
    </div>
  );
};

export default Catalogbar;

