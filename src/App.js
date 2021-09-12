import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage.js';
import Notes from './pages/Notes.js';
import React, { useState } from 'react';


const App = () => {

  const [notes, setNotes] = useState([]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage notes={notes} setNotes={setNotes}/>
          </Route>
          <Route path='/notes/:id'> 
            <Notes noteText={notes}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}



export default App;