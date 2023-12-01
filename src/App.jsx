import questions from "./data";
import { useState } from "react";
import Question from "./component/Question";

const App = () => {

  const [questionBank,setQuestionBank] = useState(questions);
  return <>
  
  <div className='accordian'>
  <h1>Questions </h1>
    {questionBank.map((ques) =>{

      return (
        <Question key={ques.id} {...ques}/>
      )
       
      
    })}


</div>
  </>;
};
export default App;
