import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

const SplineWrapper = ({ scene }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.style.pointerEvents = 'auto';
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <Spline scene={scene} ref={canvasRef} />
    </div>
  );
};

export default SplineWrapper;