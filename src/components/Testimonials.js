import React from 'react';

const Testimonials = () => {
  return (
    <div className="flex justify-center items-center max-h-screen mt-5 mb-5">
      <div className="w-72 h-[28.125rem] bg-blue-900 text-white text-center mr-5 flex flex-col items-center justify-center" style={{borderRadius:'3.5rem'}}>
        <img
          className="rounded-full mt-[-5rem] w-[48%] relative"
          src={require('./images/adi.png')}
          alt="Profile"
        />
        <h3 className="text-white text-lg font-roboto font-medium mt-10">ADITYA SHARMA</h3>
        <p className="text-white text-lg font-roboto font-normal">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
          <br />
          Nunc ullamcorper scelerisque mi, in
          <br />
          malesuada felis malesuada vel.
        </p>
      </div>
      <div className="w-72 h-[28.125rem] bg-blue-900  text-white text-center mr-5 flex flex-col items-center justify-center" style={{borderRadius:'3.5rem'}}>
        <img
          className="rounded-full mt-[-5rem] w-[48%]"
          src={require('./images/adi.png')}
          alt="Profile"
        />
        <h3 className="text-white text-lg font-roboto font-medium mt-10">ADITYA SHARMA</h3>
        <p className="text-white text-lg font-roboto font-normal">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
          <br />
          Nunc ullamcorper scelerisque mi, in
          <br />
          malesuada felis malesuada vel.
        </p>
      </div>
      <div className="w-72 h-[28.125rem] bg-blue-900 text-white text-center flex flex-col items-center justify-center" style={{borderRadius:'3.5rem'}}>
        <img
          className="rounded-full mt-[-5rem] w-[48%]"
          src={require('./images/adi.png')}
          alt="Profile"
        />
        <h3 className="text-white text-lg font-roboto font-medium mt-10">ADITYA SHARMA</h3>
        <p className="text-white text-lg font-roboto font-normal">
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
