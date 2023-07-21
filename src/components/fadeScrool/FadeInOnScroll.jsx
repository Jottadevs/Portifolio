// FadeInOnScroll.js
import React, { useEffect, useState } from 'react';
import './FadeInOnScroll.css';

const FadeInOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('fadeInElement');
    if (element) {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      setIsVisible(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount to handle elements already visible
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="fadeInElement"
      className={`fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
