import React, { useState } from "react";
import NoteContext from "./noteContext";
//import { useState } from "react";
const NoteState=(props)=>{
  const notesInitial =[
    {
      "_id": "63f095d9991f3a827a2b5c56",
      "user": "63f08391454c95ff9385dad9",
      "title": "my title",
      "description": " vskdkmvlsvdmlsdv",
      "tag": "vjsfd",
      "date": "2023-02-18T09:09:45.958Z",
      "__v": 0
    },
    {
      "_id": "63f0a2fdc5d22259194a322a",
      "user": "63f08391454c95ff9385dad9",
      "title": "darshan",
      "description": "darshan is a goodgh boy",
      "tag": "modern",
      "date": "2023-02-18T10:05:49.408Z",
      "__v": 0
    },
    {
      "_id": "63f1d52ecad0c72a4ed2ac43",
      "user": "63f08391454c95ff9385dad9",
      "title": "my titlf v,le",
      "description": " vskvf dkm,lvlsvdmlsdv",
      "tag": "vjvfsf,ld",
      "date": "2023-02-19T07:52:14.227Z",
      "__v": 0
    }
  ]

const [notes, setNotes]=useState(notesInitial)
  return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;