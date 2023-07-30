import React from 'react';

const Testimonials = () => {
  return (
    <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxHeight: '100vh', marginTop:'5vh' ,marginBottom:'5vh' }}>
      <div style={{ width: '25rem', height: '28.125rem', background: '#2B3D7E', borderRadius: '3.25rem', display: 'block', textAlign: 'center', marginRight: '1.25rem', alignItems: 'center' }}>
        <img style={{ borderRadius: '50%', marginTop: '-5rem' ,width:'48%' , position:'relative'}} src={require('./images/adi.png')} alt="Profile" />
        <h3 style={{ color: 'white', fontSize: '1.25rem', fontFamily: 'Roboto', fontWeight: '400', marginTop: '3.125rem' }}>ADITYA SHARMA</h3>
        <p style={{ color: 'white', fontSize: '1.25rem', fontFamily: 'Roboto', fontWeight: '400' }}>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
          <br />
          Nunc ullamcorper scelerisque mi, in
          <br />
          malesuada felis malesuada vel.
        </p>
      </div>
      <div style={{ width: '25rem', height: '28.125rem', background: '#2B3D7E', borderRadius: '3.25rem', display: 'block', textAlign: 'center', marginRight: '1.25rem' }}>
        <img style={{ borderRadius: '50%', marginTop: '-5rem' ,width:'48%' }} src={require('./images/adi.png')} alt="Profile" />
        <h3 style={{ color: 'white', fontSize: '1.25rem', fontFamily: 'Roboto', fontWeight: '400', marginTop: '3.125rem' }}>ADITYA SHARMA</h3>
        <p style={{ color: 'white', fontSize: '1.25rem', fontFamily: 'Roboto', fontWeight: '400' }}>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
          <br />
          Nunc ullamcorper scelerisque mi, in
          <br />
          malesuada felis malesuada vel.
        </p>
      </div>
      <div style={{ width: '25rem', height: '28.125rem', background: '#2B3D7E', borderRadius: '3.25rem', display: 'block', textAlign: 'center' }}>
        <img style={{ borderRadius: '50%', marginTop: '-5rem',width:'48%' }} src={require('./images/adi.png')} alt="Profile" />
        <h3 style={{ color: 'white', fontSize: '1.25rem', fontFamily: 'Roboto', fontWeight: '400', marginTop: '3.125rem' }}>ADITYA SHARMA</h3>
        <p style={{ color: 'white', fontSize: '1.25rem', fontFamily: 'Roboto', fontWeight: '400' }}>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
          <br />
          Nunc ullamcorper scelerisque mi, in
          <br />
          malesuada felis malesuada vel.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
