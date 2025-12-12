import React from 'react';

const ProgressBar = ({ total, activeIndex }) => {
  return (
    <div className="flex justify-center gap-3 mb-10">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1 w-20 md:w-32 rounded-full transition-all duration-300 ${
            i <= activeIndex ? "bg-slate-800" : "bg-slate-300"
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;