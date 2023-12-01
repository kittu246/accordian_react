import React,{useState} from 'react';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Question = ({id,title,info}) => {

    const [trigger,setTrigger] =useState(false);

    function showIntro(){
      
        setTrigger(!trigger)

    }
  return <div className='singleques'>
    
      <header>
        <p>{title}</p>
       
        <button onClick={showIntro}>
          {trigger ? <FaMinus /> :  <FaPlus />}
       
        </button>
        </header>

        {trigger && <p>{info}</p>}
        

    </div>
  
}

export default Question