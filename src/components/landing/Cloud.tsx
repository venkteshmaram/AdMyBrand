import React from 'react';

const Cloud = ({ style }: { style: React.CSSProperties }) => {
  return (
    <div
      className="absolute w-32 h-16 bg-white rounded-full"
      style={style}
    ></div>
  );
};

export default Cloud;
