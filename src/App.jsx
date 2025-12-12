import React from 'react';
import QuizApp from './components/QuizApp';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#C8E4F4] via-[#A8D5ED] to-[#E0EFF8] p-4 md:p-8">
      <div className="
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
      ">
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 lg:p-20">
          <QuizApp />
        </div>
      </div>
    </div>
  );
};

export default App;