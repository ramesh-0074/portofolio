'use client';

import React from 'react';

export default function CustomCursor() {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const cursorBall1Ref = React.useRef<HTMLDivElement>(null);
  const cursorBall2Ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  React.useEffect(() => {
    const ball1 = cursorBall1Ref.current;
    const ball2 = cursorBall2Ref.current;

    if (ball1 && ball2) {
      ball1.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
      ball2.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
    }
  }, [position]);

  return (
    <>
      <div
        ref={cursorBall1Ref}
        className="hidden md:block fixed pointer-events-none z-50 w-4 h-4 dark:bg-[#c1e8ff] bg-[#5483b3] rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
      ></div>

      <div
        ref={cursorBall2Ref}
        className="hidden md:block fixed pointer-events-none z-50 w-5 h-5 dark:bg-[#5483b3] bg-[#052659] rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-90 opacity-80"
      ></div>
    </>
  );
}
