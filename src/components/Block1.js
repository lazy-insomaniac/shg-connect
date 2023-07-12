import React from "react";
import { motion } from "framer-motion";
import 'typeface-roboto';

const leadingSpace = "       ";

const Block1 = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div className="w-1/2" style={{ marginLeft: '2.5rem', marginRight: '5rem', marginTop :'1.6rem' }}>
          <div className="flex flex-col items-start justify-start">
            <motion.p
              className="my-4 text-2xl font-medium"
              style={{
                fontSize: "2.5rem",
                fontFamily: 'Roboto',
                marginTop: "0.625rem",
                marginLeft: "3.75rem",
                wordBreak: 'break-word'
              }}
              initial={{
                opacity: 0,
                x: -100,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1.5,
                },
              }}
            >...WE ARE SHG-<br />CONNECT...</motion.p>
            <motion.p
              className="my-4 text-2xl font-medium"
              style={{
                fontSize: "1.5625rem",
                fontFamily: "Inter",
                marginTop: "0.625rem",
                marginLeft: "3.75rem"
              }}
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1.5,
                },
              }}
            >We manufacture the products with ensured
              product quality as well as safety and
              precautions....
            </motion.p>
            <div className="flex">
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
                CATALOG
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
                SELLERS
              </motion.button>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-end" style={{ marginLeft: '4.5rem', marginTop: '1.25rem' }}>
          <img src={require("./images/bg-comp.png")} alt="comp image" style={{ height: '18.75rem', width: '25rem' }} />
        </div>
      </div>
    </>
  );
};

export default Block1;
