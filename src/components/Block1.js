import React from 'react';
import Layout from './Layout';
import AnimatedText from './AnimatedText';
import { motion } from 'framer-motion';

const Block1 = () => {
  return (
    <div>
      <Layout>
        <div
          className="flex items-center justify-between w-full"
          style={{ backgroundColor: '#0F2661', color: 'white' }}
        >
          <div className="w-1/2">
            <div className="flex flex-col items-start justify-left">
              <AnimatedText text=".....WE ARE SHG-CONNECT....." className="text-4xl" />
              <p className="my-4 text-base font-medium">
                We manufacture the products with ensured
                <br />
                product quality as well as safety and
                <br />
                precautions....
              </p>
              <div className="flex">
                <motion.button
                  as="a"
                  href="mailto:atharvasonare700@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg mx-4 font-medium capitalize text-light underline"
                  style={{
                    background: '#8080D7',
                    borderRadius: 42,
                    color: 'white',
                    fontFamily: 'Hammersmith One',
                    fontWeight: '200',
                    wordWrap: 'break-word',
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
                    color: 'white',
                    backgroundColor: '#0F2661',
                    fontFamily: 'Hammersmith One',
                    fontWeight: '200',
                    wordWrap: 'break-word',
                    borderRadius: 42,
                    borderLeft: '0.50px #85E3E3 solid',
                    borderTop: '0.50px #85E3E3 solid',
                    borderRight: '0.50px #85E3E3 solid',
                    borderBottom: '0.50px #85E3E3 solid',
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  SELLERS
                </motion.button>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img src="./content/comp.png" alt="Company Image" className="your-class-name" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Block1;




