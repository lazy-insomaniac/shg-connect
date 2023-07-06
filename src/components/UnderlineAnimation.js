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
    <motion.a
      href="#"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      style={{
        position: 'relative',
        top:'7px',
        marginInline:'40px',
        display: 'inline-block',
        textDecoration: 'none',
        color: 'white',
      }}
    >
      {text}
      <motion.span
        style={{
          position: 'absolute',
          bottom: -2,
          left: 0,
          width: isHovered ? '100%' : '0%',
          height: '2px',
          background: 'white',
          transition: 'width 0.3s ease-out',
        }}
      />
    </motion.a>
  );
};

export default UnderlineAnimation;
