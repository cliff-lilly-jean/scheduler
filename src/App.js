import React, { useEffect, useState } from 'react';
import DatePicker from './components/DatePicker/DatePicker';
import InputField from './components/InputField/InputField';

import Button from '@mui/material/Button';


// FIREBASE
import { collection, addDoc, serverTimestamp, onSnapshot, getDoc } from 'firebase/firestore';
import db from './firebaseConfig';

// CSS
import './App.css';

function App() {


 const [newDate, setNewDate] = useState('');
 const [newInputValue, setNewInputValue] = useState('');
 const [showDatePicker, setShowDatePicker] = useState(false);
 const [showInputField, setShowInputField] = useState(true);

 const displayDatePicker = () => {
  setShowDatePicker(true);
  setShowInputField(false);
  addTodo();
 };


 const addTodo = async (e) => {
  // e.preventDefault();
  const collectionRef = collection(db, "todos");
  const payload = {
   inProgress: true,
   todo: newInputValue,
   deadlineDay: newDate,
   timestamp: serverTimestamp()
  };
  await addDoc(collectionRef, payload);
 };

 return (

  <div className="todo-app" >
   <h1>Scheduler</h1>
   <form action="">
    {showInputField ? <InputField setTodoInput={newInputValue => setNewInputValue(newInputValue)} /> : null}
    {showDatePicker ? <DatePicker setDate={newDate => setNewDate(newDate)} /> : null}
    {/* <Button type='submit' variant="contained" onClick={displayDatePicker} style={{ 'display': 'none' }}>Default</Button> */}
   </form>
  </div >
 );
}

export default App;
