import React from 'react';

const Navigation = ({ canPrev, canNext, isLast, onPrev, onNext, onSubmit }) => {
  return (
    <div className="mt-8 flex items-center justify-end gap-2">
  {/* Previous Button */}
  { !isLast && <button
    type="button"
    onClick={onPrev}
    disabled={!canPrev}
    className={`
      h-12 w-12 rounded-2xl 
      bg-gradient-to-br from-[#F3FCFF] to-[#E3F1FA] 
      shadow-md backdrop-blur-md
      flex items-center justify-center
      text-2xl font-bold text-gray-400
      disabled:opacity-70 disabled:cursor-not-allowed
      hover:brightness-105 transition-all duration-200
    `}
    aria-label="Previous question"
  >
    ←
  </button>}

  {/* Submit only on last question */}
  {isLast ? (
    <button
      type="button"
      onClick={onSubmit}
      className="px-10 py-3 rounded-xl bg-sky-100 text-slate-800 text-base font-semibold hover:bg-sky-200 transition-all duration-200"
    >
      Submit
    </button>
  ) : (
    <div />
  )}

  {/* Next Button */}
  {!isLast && <button
    type="button"
    onClick={onNext}
    disabled={!canNext}
    className={`
      h-12 w-12 rounded-2xl
      bg-gradient-to-br from-[#D9F4FA] to-[#71C6E2]
      shadow-md backdrop-blur-md
      flex items-center justify-center
      text-2xl font-bold text-[#15313D]
      disabled:opacity-60 disabled:cursor-not-allowed
      hover:brightness-105 transition-all duration-200
    `}
    aria-label="Next question"
  >
    →
  </button>
}
</div>

  );
};

export default Navigation;