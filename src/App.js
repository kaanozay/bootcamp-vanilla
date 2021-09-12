import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage.js';
import Notes from './pages/Notes.js';
import React, { useState } from 'react';
import NoteContext from './context/NoteContext.js';

const App = () => {

  const [notes, setNotes] = useState([]);

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
      <NoteContext.Provider value={{notes,setNotes,note,setNote,counter,setCounter,adding,deleting,handleChange}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path='/notes/:id'> 
            <Notes />
          </Route>
        </Switch>
      </Router>
      </NoteContext.Provider>
    </div>
  );
}



export default App;