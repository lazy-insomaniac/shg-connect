import React, { useState } from "react";
import { motion } from "framer-motion";

const Products = () => {
  const images = [
    {
      src: require("./images/laxmi.jpeg"),
      alt: "Image 1",
      text1: "INCENSE STICKS",
      text2: "Information about Incense sticks abcdefghijklmnopqrstuvwxyz",
    },
    {
      src: require("./images/Tulsi.jpeg"),
      alt: "Image 2",
      text1: "JUTE",
      text2: "Information about JUTE abcdefghijklmnopqrstuvwxyz",
    },
    // Add more image objects here with src, alt, and text properties
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  return (
    <div style={{ display: "flex", marginLeft: "5rem", alignItems: "center" }}>
      <div
        style={{ margin: "2.5rem 5rem", display: "block", alignItems: "left" }}
      >
        <p
          style={{
            color: "white",
            fontSize: "1.25rem",
            fontFamily: "Roboto",
            fontWeight: "400",
            wordWrap: "break-word",
            display: "flex",
          }}
        >
          OUR PRODUCTS
        </p>
        <p
          style={{
            color: "white",
            fontSize: "3rem",
            fontFamily: "Roboto",
            fontWeight: "400",
            wordWrap: "break-word",
            display: "flex",
          }}
        >
          {images[currentImage].text1}
        </p>
        <p
          style={{
            color: "white",
            fontSize: "1.5rem",
            fontFamily: "Caladea",
            wordWrap: "break-word",
            display: "flex",
          }}
        >
          {images[currentImage].text2}
        </p>
        <div style={{ display: "flex" }}>
          <motion.button
            as="a"
            href="/"
            className="ml-4 text-lg mx-4 font-medium capitalize text-light underline"
            style={{
              width: "11.25rem",
              height: "3.75rem",
              background: "#8080D7",
              borderRadius: "2.625rem",
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
              width: "11.25rem",
              height: "3.75rem",
              backgroundColor: "#0F2661",
              fontFamily: "Hammersmith One",
              fontWeight: "200",
              wordWrap: "break-word",
              borderRadius: "2.625rem",
              borderLeft: "0.03125rem #85E3E3 solid",
              borderTop: "0.03125rem #85E3E3 solid",
              borderRight: "0.03125rem #85E3E3 solid",
              borderBottom: "0.03125rem #85E3E3 solid",
            }}
            whileHover={{ scale: 1.1 }}
          >
            DONATE
          </motion.button>
        </div>
      </div>
      <button
        style={{ backgroundColor: "#0F2661", color: "white" }}
        onClick={handlePrevClick}
      >
        {"<"}
      </button>
      <div
        className="flex items justify-center inline-block"
        style={{
          display: "flex",
          alignItems: "center",
          margin: "5rem 2.5rem",
          height: "15rem",
          background: "rgba(128, 128, 215, 0.25)",
          borderRadius: "2.3125rem",
          transform: "rotate(15deg)",
        }}
      >
        <img
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          style={{
            borderRadius: "1.875rem", // Add the desired border radius value
            transform: "rotate(15deg)", // Tilt the image 30 degrees from the right
            height: "11.25rem",
            width: "auto",
          }}
        />
      </div>
      <button
        style={{ backgroundColor: "#0F2661", color: "white" }}
        onClick={handleNextClick}
      >
        {">"}
      </button>
    </div>
  );
};

export default Products;
