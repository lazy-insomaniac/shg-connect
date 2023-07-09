import React, { useState } from 'react';
import {motion} from 'framer-motion';

const Products = () => {
  const images = [
    {
      src: require('./images/laxmi.jpeg'),
      alt: 'Image 1',
      text1: 'INCENSE STICKS',
      text2: 'Information about Incense sticks abcdefghijklmnopqrstuvwxyz'
    },
    {
      src: require('./images/Tulsi.jpeg'),
      alt: 'Image 2',
      text1: 'JUTE',
      text2: 'Information about JUTE abcdefghijklmnopqrstuvwxyz' 
    },
    // Add more image objects here with src, alt, and text properties
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  const handleNextClick = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  return (
    <div   style={{ display: 'flex' ,marginLeft : '80px'}}>
      <div style={{ margin: '40px 80px' }}>
        <p style={{ color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}} >OUR PRODUCTs</p>
        <p style={{ color: 'white', fontSize: 48, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}} >{images[currentImage].text1}</p>
        <p style={{color: 'white', fontSize: 24,fontFamily:'Caladea',wordwrap: 'break-word'}}>{images[currentImage].text2}</p>
        <div className="flex">
              <motion.button
                as="a"
                href="/"
                className="ml-4 text-lg mx-4 font-medium capitalize text-light underline"
                style={{
                  width: "180px",
                  height: "60px",
                  background: "#8080D7",
                  borderRadius: 42,
                  color: "white",
                  fontFamily: "Hammersmith One",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
                whileHover={{ scale: 1.1 }}
              >
                KNOW MORE
              </motion.button>
              <motion.button
                as="a"
                href="/"
                className="flex items-center text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent hover:border-dark ml-4"
                style={{
                  color: "white",
                  width: "180px",
                  height: "60px",
                  backgroundColor: "#0F2661",
                  fontFamily: "Hammersmith One",
                  fontWeight: "200",
                  wordWrap: "break-word",
                  borderRadius: 42,
                  borderLeft: "0.50px #85E3E3 solid",
                  borderTop: "0.50px #85E3E3 solid",
                  borderRight: "0.50px #85E3E3 solid",
                  borderBottom: "0.50px #85E3E3 solid",
                }}
                whileHover={{ scale: 1.1 }}
              >
                DONATE
              </motion.button>
            </div>
      </div>
      <div className ='flex items justify-center inline-block' style={{ display: 'flex', alignItems: 'center', margin : '80px 40px' , height : '225px' ,  background: 'rgba(128, 128, 215, 0.25)', borderRadius: 37 }}>
        <button style = {{  backgroundColor: '#0F2661', color: 'white'}} onClick={handlePrevClick}>{'<'}</button>
        <img
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          style={{
            borderRadius: '30px', // Add the desired border radius value
            transform: 'rotate(15deg)', // Tilt the image 30 degrees from the right
            height :'180px',
            width : 'auto',
          }}
        />
        <button  style = {{  backgroundColor: '#0F2661', color: 'white' }} onClick={handleNextClick}>{'>'}</button>
      </div>
    </div>
  );
};

export default Products;