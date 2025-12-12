import React from 'react';
import OptionButton from './OptionButton';

const QuestionCard = ({ question, selectedIndex, onSelect }) => {
  return (
    <div className="w-full flex justify-center">
  <div className="space-y-4 w-full max-w-[600px]">
    <div className="rounded-xl bg-sky-100 py-5 px-6 text-center text-base font-semibold text-slate-800">
      {question.question}
    </div>

    <div className="flex flex-col gap-4">
      {question.options.map((opt, idx) => (
        <OptionButton
          key={opt}
          label={opt}
          selected={selectedIndex === idx}
          onClick={() => onSelect(idx)}
        />
      ))}
    </div>
  </div>
</div>

  );
};

export default QuestionCard;