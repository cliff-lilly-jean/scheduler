import React, { useEffect, useState } from 'react';

// MATERIAL UI
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

// FIREBASE
import { collection, addDoc, serverTimestamp, onSnapshot, getDoc } from 'firebase/firestore';
import db from './firebaseConfig';

// CSS
import './App.css';

function App() {

 // USE STATE
 const [todoInput, setTodoInput] = useState('');
 const [todos, setTodos] = useState([]);

 // USE EFFECT
 useEffect(() =>
  onSnapshot(collection(db, 'todos'), (snapshot) =>
   setTodos(snapshot.docs.map(doc => doc.data()))
  ),
  []);

 const addTodo = async (e) => {
  e.preventDefault();
  const collectionRef = collection(db, "todos");
  const payload = {
   inProgress: true,
   todo: todoInput,
   timestamp: serverTimestamp()
  };
  await addDoc(collectionRef, payload);
  setTodoInput('');
 };

 // TODO: FIND OUT WHY THE ONSNAPSHOT FIREBASE CALL IS RUNNING TWICE

 return (

  <div className="todo-app" >
   <h1>Scheduler</h1>
   <form action="">
    {/* TEXTFIELD */}
    <TextField className="todo-app__text-field"
     id="standard-basic"
     label="What's Next?"
     variant="standard"
     value={todoInput}
     onChange={(e) => {
      setTodoInput(e.target.value);
     }}
    />
    {/* BUTTON */}
    <Button type='submit' variant="contained" onClick={addTodo} style={{ 'display': 'none' }}>Default</Button>
   </form>
   <div className="todos-container">
    {todos.map((todo) => (
     <li>
      {todo.todo}

     </li>
    ))}
   </div>
  </div >
 );
}

export default App;
