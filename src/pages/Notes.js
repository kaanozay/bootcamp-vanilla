import React from 'react'
import { useParams } from 'react-router'

export default function Notes({noteText}) {

    let {id} = useParams();
    
    const {text} = noteText.find((item) => item.id == id);
    
    console.log(text);

    return (
        <div>
            {text}
        </div>
    )
}