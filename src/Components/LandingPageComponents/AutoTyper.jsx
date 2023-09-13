import React, { useState, useEffect } from 'react';
import { Box, Heading } from '@chakra-ui/react';

const AutoTyper = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, delay, text]);

  return (
    <Heading fontSize="" fontWeight="bold">
      {displayText}
    </Heading>
  );
};

export default AutoTyper;
