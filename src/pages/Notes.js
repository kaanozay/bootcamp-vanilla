import React, {useContext} from 'react'
import { useParams } from 'react-router'
import NoteContext from '../context/NoteContext';

export default function Notes() {
    const data = useContext(NoteContext);

    let {id} = useParams();

    const text = data.notes.find((item) => item.id == id);
    
    console.log(text);

    return (
        <div>
            {text["text"]}
        </div>
    )
}


