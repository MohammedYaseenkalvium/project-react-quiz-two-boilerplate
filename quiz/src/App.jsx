import React, { useEffect, useState } from "react";
import "./App.css";
import question from "./questions.jsx";
import Result from "./component/Result.jsx";
import QuestionBox from "./component/QuestionBox.jsx"; 
import Start from './component/Start'
import "./component/style.css" 



function App() {

  const [start, setStart] = useState(false);

  return (
    <div className="quiz">
      { start ? <QuestionBox /> : <Start props={setStart} />} 
    </div>
  );
}

export default App;