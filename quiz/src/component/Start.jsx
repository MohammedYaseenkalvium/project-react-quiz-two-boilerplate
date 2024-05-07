import React from 'react'
import "./style.css"

const Start = ({props}) => {

    const startQuiz = () => props(true)
 
    return (
        <div className='start-page'>
            <h1>REACT.QZ</h1>
            <button onClick={startQuiz}>START QUIZ</button>
        </div>
    )
}

export default Start