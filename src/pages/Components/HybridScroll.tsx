"use client";
import React, { useRef, useEffect, ReactNode } from 'react';
import Image from 'next/image';

interface HybridScrollProps{
  children: any;
}

const HybridScroll: React.FC<HybridScrollProps> = ({children}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (container && content) {
      const handleWheel = (event: WheelEvent) => {
        if (event.deltaY !== 0) {
          container.scrollLeft += event.deltaY;
          event.preventDefault();
        } else {
          const isAtEndOfScroll = container.scrollLeft + container.clientWidth >= content.clientWidth;
          if (isAtEndOfScroll) {
            // Perform automatic scroll to the next page
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
          }
        }
      };

      container.addEventListener('wheel', handleWheel);

      return () => {
        container.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  return (
    <div 
      ref={containerRef}  // Hides both x and y overflow
      style={{ 
        width: '100vw', 
        height: '100vh', 
        overflowX: 'auto', 
        overflowY:'hidden',// Allow horizontal scrolling
      }}
    >
      <div ref={contentRef} className="flex" style={{ width: 'max-content' }}>
        {children}
     </div>
     </div>
  );
};

export default HybridScroll;
