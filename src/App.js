import React, { useEffect, useState } from 'react';
import DatePicker from './components/DatePicker/DatePicker';

// MATERIAL UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


// FIREBASE
import { collection, addDoc, serverTimestamp, onSnapshot, getDoc } from 'firebase/firestore';
import db from './firebaseConfig';

// CSS
import './App.css';

function App() {


 const [todoInput, setTodoInput] = useState('');


 useEffect(() => {
  // getTodos();
 }, []);

 // const getTodos = async () => {
 //  const docRef = collection(db, "todos");
 //  const retrieveDoc = await getDoc(docRef);
 // };


 const addTodo = async (e) => {
  e.preventDefault();
  const collectionRef = collection(db, "todos");
  const payload = {
   inProgress: true,
   todo: todoInput,
   deadlineDay: <DatePicker />,
   timestamp: serverTimestamp()
  };
  await addDoc(collectionRef, payload);
  // setTodoInput('');
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
     onChange={(e) => {
      setTodoInput(e.target.value);
      // TODO: Pull upp the date time picker
     }}
    />
    {/* <DatePicker /> */}
    <Button type='submit' variant="contained" onClick={addTodo} style={{ 'display': 'none' }}>Default</Button>
   </form >

  </div >
 );
}

export default App;
