import React from 'react';

const OptionButton = ({ label, selected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full  px-6 py-4 rounded-xl border 
        transition-all duration-200 font-medium
        ${selected 
          ? "bg-sky-100 border-[#C6E9F7] text-slate-900"
          : "bg-white border-slate-300 text-slate-700 hover:bg-[#E5F8FF]"}
      `}
    >
      {label}
    </button>
  );
};

export default OptionButton;