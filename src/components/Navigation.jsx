import React from "react";

const Navigation = ({ canPrev, canNext, isLast, onPrev, onNext, onSubmit }) => {
  return (
    <div className="mt-4 w-full flex justify-end">

      {/* Previous Button */}
      {!isLast && (
        <button
          type="button"
          onClick={onPrev}
          disabled={!canPrev}
          className="
            h-10 w-10 rounded-xl
            bg-[#EAF6FF]
            shadow-sm
            flex items-center justify-center
            text-xl text-gray-600
            disabled:opacity-40 disabled:cursor-not-allowed
            hover:bg-[#DFF0FF] transition-all
            mr-3
          "
        >
          ←
        </button>
      )}

      {/* Submit Button (Only on last question) */}
      {isLast && (
        <button
          type="button"
          onClick={onSubmit}
          className="
            px-8 py-3 rounded-xl
            bg-[#EAF6FF]
            text-slate-800 text-base font-semibold
            shadow-sm hover:bg-[#DFF0FF] transition-all
            mr-3
          "
        >
          Submit
        </button>
      )}

      {/* Next Button */}
      {!isLast && (
        <button
          type="button"
          onClick={onNext}
          disabled={!canNext}
          className="
            h-10 w-10 rounded-xl
            bg-[#A0D4EA]
            shadow-sm
            flex items-center justify-center
            text-xl text-white
            disabled:opacity-40 disabled:cursor-not-allowed
            hover:bg-[#8BC9E2] transition-all
          "
        >
          →
        </button>
      )}

    </div>
  );
};

export default Navigation;
