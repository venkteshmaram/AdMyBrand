import React from 'react';

const Airplane = () => {
  return (
    <svg
      width="800"
      height="400"
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-1/2 -translate-x-1/2"
    >
      <path
        d="M300 300L100 350L50 320L250 250L300 300Z"
        fill="white"
        stroke="#E5E7EB"
        strokeWidth="2"
      />
      <path
        d="M250 250L550 150L600 200L300 300L250 250Z"
        fill="white"
        stroke="#E5E7EB"
        strokeWidth="2"
      />
      <path
        d="M550 150L700 100L750 150L600 200L550 150Z"
        fill="#4ADE80"
        stroke="#E5E7EB"
        strokeWidth="2"
      />
      <circle cx="300" cy="275" r="5" fill="black" />
      <circle cx="350" cy="262.5" r="5" fill="black" />
      <circle cx="400" cy="250" r="5" fill="black" />
      <circle cx="450" cy="237.5" r="5" fill="black" />
      <circle cx="500" cy="225" r="5" fill="black" />
    </svg>
  );
};

export default Airplane;
