import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UnderlineAnimation = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <motion.div style={{margin:'0.5rem 2rem',textDecoration: 'none',
    display: 'block',
    width: '100%'}}>
    <motion.a
      href="#"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      className="relative inline-block text-white no-underline"
    >
      {text}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-white transition-width duration-300 ease-out"
        style={{ width: isHovered ? '100%' : '0%' }}
      />
    </motion.a>
    </motion.div>
  );
};

export default UnderlineAnimation;
