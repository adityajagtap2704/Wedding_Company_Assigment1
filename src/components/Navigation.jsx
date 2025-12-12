import React from 'react';

const Navigation = ({ canPrev, canNext, isLast, onPrev, onNext, onSubmit }) => {
  return (
    <div className="flex justify-end gap-3 w-full mt-4">

      {!isLast && (
        <button
          type="button"
          onClick={onPrev}
          disabled={!canPrev}
          className="
            h-10 w-10 rounded-md 
            bg-[#E5F2F7] shadow-sm 
            flex items-center justify-center
            text-xl text-gray-400
            disabled:opacity-40 disabled:cursor-not-allowed
            hover:bg-[#D8EBF2] transition-colors duration-200
          "
        >
          ←
        </button>
      )}

      {isLast && (
        <button
          type="button"
          onClick={onSubmit}
          className="
            px-10 py-3 rounded-lg 
            bg-sky-100 text-slate-800 font-semibold 
            hover:bg-sky-200 transition-all duration-200
          "
        >
          Submit
        </button>
      )}

      {!isLast && (
        <button
          type="button"
          onClick={onNext}
          disabled={!canNext}
          className="
            h-10 w-10 rounded-md 
            bg-[#80CEE6] shadow-sm
            flex items-center justify-center
            text-xl text-white
            disabled:opacity-40 disabled:cursor-not-allowed
            hover:bg-[#6FBFD8] transition-colors duration-200
          "
        >
          →
        </button>
      )}
    </div>
  );
};

export default Navigation;
