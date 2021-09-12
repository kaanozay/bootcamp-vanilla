import React, { useContext, useState } from 'react'
import {
  Link,
  useParams,
} from "react-router-dom";
import NoteContext from '../context/NoteContext';

export default function MainPage() { 

  const data = useContext(NoteContext);

    return (
        <div className="App">
          
          <textarea
            name="note"
            onChange={data.handleChange}
            value={data.note}
          />
          <div>
            <button onClick={() => data.adding()}>Create</button>
          </div>
          
         
         <div>
         {data.notes.map((item) => {
                    return (
                        <>
                        <div>
                            <h2>{item.text}</h2>
                              <li>
                                <Link to={item.path} >Nota git</Link>
                              </li>
                            <button onClick={() => data.deleting(item.id)}>Delete</button>
                        </div>
                            
                        </>
                    );
                })}
         </div>
        </div>
      );
}


