import React from 'react';

const Testimonials = () => {
  return (
    <div className="items justify-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ width: '400px', height: '450px', background: '#2B3D7E', borderRadius: 52, display: 'block', textAlign: 'center' , marginRight : ' 20px'}}>
        <img style={{ borderRadius: '50%', marginTop: '-80px' }} src={require('./images/adi.png')} alt="Profile" />
        <h3 style={{ color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400' , marginTop:'50px' }}>ADITYA SHARMA</h3>
        <p style={{ color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400' }}>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
          <br />
          Nunc ullamcorper scelerisque mi, in
          <br />
          malesuada felis malesuada vel.
        </p>
      </div>
      <div style={{ width: '400px', height: '450px', background: '#2B3D7E', borderRadius: 52, display: 'block', textAlign: 'center' , marginRight : ' 20px' }}>
        <img style={{ borderRadius: '50%', marginTop: '-80px' }} src={require('./images/adi.png')} alt="Profile" />
        <h3 style={{ color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400' , marginTop:'50px' }}>ADITYA SHARMA</h3>
        <p style={{ color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400' }}>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
          <br />
          Nunc ullamcorper scelerisque mi, in
          <br />
          malesuada felis malesuada vel.
        </p>
      </div>
      <div style={{ width: '360px', height: '450px', background: '#2B3D7E', borderRadius: 52, display: 'block', textAlign: 'center' }}>
        <img style={{ borderRadius: '50%', marginTop: '-80px' }} src={require('./images/adi.png')} alt="Profile" />
        <h3 style={{ color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400' , marginTop:'50px' }}>ADITYA SHARMA</h3>
        <p style={{ color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400' }}>
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
