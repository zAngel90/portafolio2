import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      // Usamos clientX y clientY directamente ya que position: fixed se posiciona relativo a la ventana
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        setIsHovered(true);
      }
    };

    const onMouseOut = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        setIsHovered(false);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor ${isHovered ? 'scale-150' : ''}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`
        }}
      />
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`
        }}
      />
    </>
  );
};

export default CustomCursor; 