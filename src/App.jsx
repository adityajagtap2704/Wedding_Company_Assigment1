import React from 'react';
import QuizApp from './components/QuizApp';

const App = () => {
  return (
  <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(135deg,#BECFEE,#71C6E2,#D9F4FA,#BECFEE)] p-4 md:p-8">

  <div className="
      bg-[linear-gradient(135deg,#BECFEE,#71C6E2,#D9F4FA,#BECFEE)]
      border border-gray-300
      rounded-[32px]
      p-8
      w-full
      max-w-[1600px]
      mt-[80px]
    mb-[80px]
    mx-[148px]
  ">

      <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 lg:p-20">
        <QuizApp />
      </div>

  </div>

</div>



  );
};

export default App;