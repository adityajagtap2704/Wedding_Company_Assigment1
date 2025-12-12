import React from 'react';
import QuizApp from './components/QuizApp';

const App = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 md:p-8"
      style={{
        background: "linear-gradient(135deg, #6AB3E7, #A4D7F7, #D4ECF8)"
      }}
    >
      {/* OUTER GRADIENT CARD */}
      <div
        className="
          bg-gradient-to-br from-[#B8DFF5]/50 via-[#9DCFE8]/40 to-[#C8E4F4]/50
          border border-white/60
          rounded-[40px]
          p-8
          w-full
          max-w-[1600px]
          mt-[80px]
          mb-[80px]
          mx-[148px]
          shadow-xl
        "
      >
        {/* ⭐ INNER MAIN CARD (updated color here) */}
        <div
          className="rounded-3xl shadow-2xl p-10 md:p-14 lg:p-20"
          style={{ background: "#F4FDFF" }}  // ⬅ Updated background color
        >
          <QuizApp />
        </div>
      </div>
    </div>
  );
};

export default App;
