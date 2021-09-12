import React, { useState } from 'react'
import {
  Link,
  useParams,
} from "react-router-dom";

export default function MainPage({notes, setNotes}) { 

    const [note, setNote] =useState("");

    const [counter, setCounter] = useState(Date.now);


  const adding = () => {
    setCounter(counter+1);
    setNotes([...notes, {text:note, id:counter, path:"/notes/"+counter}]);  
    

  }

  const deleting = (id) => {

   setNotes(notes.filter((item) => item.id !== id));
    
  }

  const handleChange = (e) => {setNote(e.target.value)}


    return (
        <div className="App">
          
          <textarea
            name="note"
            onChange={handleChange}
            value={note}
          />
          <div>
            <button onClick={() => adding()}>Create</button>
          </div>
          
         
         <div>
         {notes.map((item) => {
                    return (
                        <>
                        <div>
                            <h2>{item.text}</h2>
                              <li>
                                <Link to={item.path} >Nota git</Link>
                              </li>
                            <button onClick={() => deleting(item.id)}>Delete</button>
                        </div>
                            
                        </>
                    );
                })}
         </div>
        </div>
      );
}


