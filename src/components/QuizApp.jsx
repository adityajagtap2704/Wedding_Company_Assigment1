import React, { useState, useEffect } from "react";
import { quizData } from "../data/quizData";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import Navigation from "./Navigation";
import ResultsView from "./ResultsView";

const QuizApp = () => {
  const totalQuestions = quizData.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(totalQuestions).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [scorePercent, setScorePercent] = useState(0);

  const currentQuestion = quizData[currentIndex];

  const handleSelect = (index) => {
    const updated = [...answers];
    updated[currentIndex] = index;
    setAnswers(updated);
  };

  const goPrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const goNext = () => setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1));

  const handleSubmit = () => {
    let correct = 0;
    answers.forEach((ans, i) => {
      if (ans === quizData[i].correctIndex) correct++;
    });
    setScorePercent(Math.round((correct / totalQuestions) * 100));
    setShowResults(true);
  };

  const handleRestart = () => {
    setAnswers(Array(totalQuestions).fill(null));
    setCurrentIndex(0);
    setShowResults(false);
    setScorePercent(0);
  };

  useEffect(() => {
    const listener = (e) => {
      if (showResults) return;
      if (e.key === "ArrowLeft" && currentIndex > 0) goPrev();
      if (e.key === "ArrowRight" && currentIndex < totalQuestions - 1) goNext();
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [showResults, currentIndex]);

  if (showResults) {
    return <ResultsView percentage={scorePercent} onRestart={handleRestart} />;
  }

  return (
    <div className="relative">

      {/* PAW ONLY ON PAGE 1 */}
      {currentIndex === 0 && (
        <div className="absolute left-0 bottom-0 flex items-end" style={{ transform: "translateY(50%)" }}>
          <div className="relative">
            <div className="bg-white border-2 border-gray-300 rounded-2xl rounded-bl-none px-4 py-2 mb-2 ml-12 shadow-md">
              <p className="text-sm font-medium text-slate-700">Best of Luck !</p>
            </div>
            <img
              src="/src/assets/cat-paw.gif"
              alt="Cat Paw"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
      )}

      <h1
        className="text-center text-4xl md:text-5xl lg:text-6xl
        font-serif italic font-semibold
        bg-gradient-to-r from-[#15313D] to-[#3CABDA]
        bg-clip-text text-transparent
        mb-4"
      >
        Test Your Knowledge
      </h1>

      <p className="mb-10 text-center text-sm text-slate-600">
        Answer all questions to see your results
      </p>

      <ProgressBar total={totalQuestions} activeIndex={currentIndex} />

      <QuestionCard
        question={currentQuestion}
        selectedIndex={answers[currentIndex]}
        onSelect={handleSelect}
      />

      <Navigation
        canPrev={currentIndex > 0}
        canNext={currentIndex < totalQuestions - 1}
        isLast={currentIndex === totalQuestions - 1}
        onPrev={goPrev}
        onNext={goNext}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default QuizApp;
