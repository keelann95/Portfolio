import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/common/CustomCursor';

const MainLayout: React.FC = () => {
  const location = useLocation();
  const [cursorHovering, setCursorHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCursorHover = (hovering: boolean) => {
    setCursorHovering(hovering);
  };

  return (
    <div 
      className="min-h-screen flex flex-col"
      onMouseEnter={() => handleCursorHover(false)}
    >
      {!isMobile && <CustomCursor hovering={cursorHovering} />}
      
      <Header onCursorHover={handleCursorHover} />
      
      <main className="flex-grow">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="container mx-auto px-4 py-8 md:py-16"
        >
          <Outlet />
        </motion.div>
      </main>
      
      <Footer onCursorHover={handleCursorHover} />
    </div>
  );
};

export default MainLayout;