import React, { useState, useEffect } from 'react';
import quizQuestions from '../questions';
import Result from './Result';
import "./style.css"

export default function QuestionBox() {
  const [quiz, setQuiz] = useState([]);
  const [number, setNumber] = useState(0);
  const [pts, setPts] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [attemptedQuestions, setAttemptedQuestions] = useState(0);
  
  //useEffect to mount question on load
  useEffect(() => {
    setQuiz(quizQuestions);
  }, []);


  //function to check user input
  const pickAnswer = (e) => {
    const userAnswer = e.target.innerText;
    const correctAnswer = quiz[number].options.find((option) => option.isCorrect).text;
  //increase point when user selects correct option
    if (userAnswer === correctAnswer) {
      setPts(pts + 1);
    }
  //increase the question count
    setNumber(number + 1);
  //keeping track of questions not answered, so next button doesnt count as an answer
    if (userAnswer !== '') {
      setAttemptedQuestions(number + 1);
    }
  };

  const currentQuestion = quiz[number];
  console.log(currentQuestion)

  if (showResult || number === quiz.length) {
    return (
      <Result
        totalQuestions={quiz.length}
        attemptedQuestions={attemptedQuestions}
        correctAnswers={pts}
      />
    );
  }
  //next button 
  const NextQuestion = () => {
    if (number + 1 === quiz.length) {
      setShowResult(true);
    } else {
      setNumber(number + 1);
    }
  };
  //previous button
  const PreviousQuestion = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };
  //quit button
  const quitQuiz = () => {
    setShowResult(true);
  };

  return (
    <div className='quiz-page'>
      <div className='quiz-container'>
        {currentQuestion && (
          <div className='question-div'>
            <div>
              <h5>{`Question ${number + 1} of ${quiz.length}`}</h5>
              <h2 className='question-title'>{currentQuestion.question}</h2>
            </div>
            <div className='button-div'>
              <button onClick={PreviousQuestion}>Previous</button>
              <button onClick={NextQuestion}>Next</button>
              <button onClick={quitQuiz}>Quit</button>
            </div>
          </div>
        )}
        <div className='option-div'>
              {currentQuestion.options.map((option, index) => (
                <button key={index} onClick={pickAnswer}>
                  {option.text}
                </button>
              ))}
        </div>
      </div>
    </div>
  );
}