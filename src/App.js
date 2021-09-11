//import TableComponent from "./components/TableComponent";

import React, { useState } from 'react'

const App = () => {


  const [note, setNote] =useState("");

  const [notes, setNotes] = useState([]);

  const adding = () => {

    setNotes([...notes, note]);  

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
                        <h2>{item}</h2>
                        <button onClick={() => deleting(item.id)}>Delete</button>
                    </div>
                        
                    </>
                );
            })}
     </div>
    </div>
  );


}


export default App;