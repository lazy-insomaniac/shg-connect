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
        top: '0.4375rem', // 7px / 16px = 0.4375rem
        marginInline: '2.5rem', // 40px / 16px = 2.5rem
        display: 'inline-block',
        textDecoration: 'none',
        color: 'white',
      }}
    >
      {text}
      <motion.span
        style={{
          position: 'absolute',
          bottom: '-0.125rem', // -2px / 16px = -0.125rem
          left: 0,
          width: isHovered ? '100%' : '0%',
          height: '0.125rem', // 2px / 16px = 0.125rem
          background: 'white',
          transition: 'width 0.3s ease-out',
        }}
      />
    </motion.a>
  );
};

export default UnderlineAnimation;
