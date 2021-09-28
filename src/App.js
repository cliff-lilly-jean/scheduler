import React, { useEffect, useState } from 'react';

// MATERIAL UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DateTimePicker from '@mui/lab/DateTimePicker';
// import EventIcon from '@mui/icons-material/Event';
// import Input from '@mui/material/Input';
// import InputAdornment from '@mui/material/InputAdornment';

// FIREBASE
import { collection, addDoc, serverTimestamp, onSnapshot, getDoc } from 'firebase/firestore';
import db from './firebaseConfig';

// CSS
import './App.css';

function App() {


 const [todoInput, setTodoInput] = useState('');
 // const [date, setDate] = useState('');

 useEffect(() => {
  getTodos();
 }, []);

 const getTodos = async () => {
  const docRef = collection(db, "todos");
  const retrieveDoc = await getDoc(docRef);
 };


 const addTodo = async (e) => {
  e.preventDefault();
  const collectionRef = collection(db, "todos");
  const payload = {
   inProgress: true,
   todo: todoInput,
   // deadlineDate: date,
   timestamp: serverTimestamp()
  };
  await addDoc(collectionRef, payload);
  setTodoInput('');
  // setDate('');
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
       // className="todo-app__text-field"
       // id="standard-basic"
       label="Choose a deadline"
       variant="standard"
      />}
      label=""
      value={date}
      onChange={(newValue) => {
       setDate(newValue);
      }}
     />
    </LocalizationProvider> */}
    <Button type='submit' variant="contained" onClick={addTodo} style={{ 'display': 'none' }}>Default</Button>
   </form >

  </div >
 );
}

export default App;
