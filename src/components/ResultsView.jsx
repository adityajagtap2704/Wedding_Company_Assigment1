import React from 'react';

const ResultsView = ({ percentage, onRestart }) => {
  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
      <p className="mb-3 text-sm font-medium text-slate-600">Keep Learning!</p>
      <h2 className="mb-4 text-3xl md:text-4xl text-slate-800 font-serif italic">
        Your Final score is
      </h2>
      <div className="my-6 flex items-baseline gap-1">
        <span className="text-7xl md:text-8xl font-bold text-teal-700">
          {percentage}
        </span>
        <span className="text-4xl md:text-5xl font-medium text-teal-700">%</span>
      </div>
      <button
        type="button"
        onClick={onRestart}
        className="mt-4 px-10 py-3 rounded-lg bg-sky-100 text-slate-800 text-base font-semibold hover:bg-sky-200 transition-all duration-200"
      >
        Start Again
      </button>
    </div>
  );
};

export default ResultsView;