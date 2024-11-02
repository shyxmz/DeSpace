// src/components/Features/SpaceQuiz.jsx

import React, { useState, useEffect } from 'react';
import { Trophy, RefreshCw, Timer } from 'lucide-react';
import { allQuestions } from '../Features/questions'; // Adjust the import path if necessary

const Card = ({ children }) => (
  <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl w-[60vw] mx-auto">
    {children}
  </div>
);

const CardContent = ({ children }) => (
  <div className="p-12">{children}</div>
);

const SpaceQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);

  const getRandomQuestions = () => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 15);
  };

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 5);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setTimer(30);
    } else {
      setShowScore(true);
      setIsActive(false);
    }
  };

  const restartQuiz = () => {
    setQuizQuestions(getRandomQuestions());
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimer(30);
    setIsActive(true);
  };

  useEffect(() => {
    setQuizQuestions(getRandomQuestions());
  }, []);

  useEffect(() => {
    let interval = null;
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setShowScore(true);
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-32 px-4">
      <div className="mx-auto">
        {!isActive && !showScore ? (
          <Card>
            <CardContent>
              <h2 className="text-4xl font-bold mb-10 text-white text-center">Space Knowledge Quiz</h2>
              <p className="mb-10 text-gray-300 text-xl text-center">
                Test your knowledge with 15 random questions about space, satellites, and our solar system!
              </p>
              <button 
                onClick={() => setIsActive(true)}
                className="bg-sky-900/40 hover:bg-sky-800/60 text-white px-8 py-4 rounded-xl backdrop-blur-sm text-lg transition-colors duration-200 mx-auto block"
              >
                Start Quiz
              </button>
            </CardContent>
          </Card>
        ) : showScore ? (
          <Card>
            <CardContent>
              <div className="mb-10">
                <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-white text-center">Quiz Completed!</h2>
              </div>
              <p className="text-3xl mb-6 text-white text-center">
                You scored {score} out of {quizQuestions.length * 5}
              </p>
              <p className="text-gray-300 mb-10 text-xl text-center">
                {score === quizQuestions.length * 5
                  ? "Perfect! You're a space expert! 🚀"
                  : score > (quizQuestions.length * 5) / 2
                  ? "Great job! You know your space stuff! 🌟"
                  : "Keep learning about space! Try again! 🌍"}
              </p>
              <button 
                onClick={restartQuiz}
                className="bg-sky-900/40 hover:bg-sky-800/60 text-white px-8 py-4 rounded-xl backdrop-blur-sm flex items-center gap-3 mx-auto text-lg"
              >
                <RefreshCw className="w-6 h-6" />
                Try Again
              </button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent>
              <div className="flex justify-between items-center mb-10">
                <span className="text-xl text-white">
                  Question {currentQuestion + 1}/{quizQuestions.length}
                </span>
                <div className="flex items-center gap-3">
                  <Timer className="w-6 h-6 text-blue-400" />
                  <span className={`text-xl ${timer <= 10 ? 'text-red-500' : 'text-blue-400'}`}>
                    {timer}s
                  </span>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mb-10 text-white">
                {quizQuestions[currentQuestion]?.question}
              </h2>
              
              <div className="grid gap-6">
                {quizQuestions[currentQuestion]?.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(option)}
                    className="min-h-[70px] w-full text-left p-6 bg-sky-900/40 hover:bg-sky-800/60 rounded-xl backdrop-blur-sm text-white text-xl transition-colors duration-200"
                  >
                    {option}
                  </button>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-300 text-xl">Current Score: {score}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SpaceQuiz;
