import React from 'react';
import "./style.css"

const Result = ({ totalQuestions, attemptedQuestions, correctAnswers }) => {
  const unansweredQuestions = totalQuestions - attemptedQuestions;
  const wrongAnswers = attemptedQuestions - correctAnswers;
  const percentage = (correctAnswers / totalQuestions) * 100;
//using let instead of const to change value based on scenario
  let sentence = "You Did Well";
//chanigng the message based on the users point 
if (correctAnswers === 0) {
  sentence = "You Wasted Your Life";
} else if (correctAnswers === 2) {
  sentence = "You need to try Harder";
} else if (correctAnswers === 3) {
  sentence = "You did your best";
} else if (correctAnswers === 4) {
  sentence = "You did well";
} else {
  sentence = "You did Awesome";
}

//play again button
const playAgain = () => {
  window.location.href = './QuestionBox.jsx';
};




  return (
    <div className='result-page'>
      <div className='result-container'>
        <h3>{sentence}</h3>
        <h1>{`You Scored ${percentage}%`}</h1>
        <div className='res-p-container'>
          <div className='res-p-div'>
            <p>Total number of questions</p>
            <p className='res-val'>{totalQuestions}</p>
          </div>
          <div className='res-p-div'>
            <p>Number of questions attempted</p>
            <p className='res-val'>{attemptedQuestions}</p>
          </div>
          <div className='res-p-div'>
            <p>Number of correct answers</p>
            <p className='res-val'>{correctAnswers}</p>
          </div>
          <div className='res-p-div'> 
            <p>Number of wrong answers</p>
            <p className='res-val'>{wrongAnswers}</p>
          </div>
          <div className='res-p-div'> 
            <p>Number of unanswered questions</p>
            <p className='res-val'>{unansweredQuestions}</p>
          </div>
        </div>
      </div>
      <div className='res-btn-div'>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Result;