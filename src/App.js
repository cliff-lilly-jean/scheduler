import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { collection, addDoc } from 'firebase/firestore';
import db from './firebaseConfig';

import './App.css';

function App() {
 const [todoInput, setTodoInput] = useState('');


 const addTodo = async (e) => {
  e.preventDefault();
  const collectionRef = collection(db, "todos");
  const payload = {
   inProgress: true,
   todo: todoInput,
   // TODO: Add a date
  };
  await addDoc(collectionRef, payload);
 };

 return (
  <div className="todo-app">
   <h1>Scheduler</h1>
   <form className="todo-app__form" action="#">
    <TextField
     className="todo-app__text-field"
     id="standard-basic"
     label="What's Next?"
     variant="standard"
     value={todoInput}
     onChange={(e) => setTodoInput(e.target.value)}
    />
    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
     <DateTimePicker
      renderInput={(props) => <TextField {...props}
       className="todo-app__text-field"
       id="standard-basic"
       label="What's Next?"
       variant="standard"
       onChange={(e) => setTodoInput(e.target.value)} />}
      // label=""
      value={todoInput}
      onChange={(newValue) => {
       setDate(newValue);
      }}
     />
    </LocalizationProvider> */}
    <Button type='submit' variant="contained" onClick={addTodo}>Default</Button>
   </form >
  </div >
 );
}

export default App;
