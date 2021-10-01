import React, { useEffect, useState } from 'react';
import Todo from './components/Todo/Todo';

// MATERIAL UI
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

// FIREBASE
import { collection, addDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';
import db from './firebaseConfig';

// CSS
import './App.css';


function App() {

 // USE STATE
 const [todoInput, setTodoInput] = useState('');
 const [todos, setTodos] = useState([]);

 // USE EFFECT
 useEffect(() => {
  getTodos();
 }, []);

 const getTodos = () => {
  onSnapshot(collection(db, 'todos'), (snapshot) => {
   setTodos(snapshot.docs.map(doc => ({
    id: doc.id,
    todo: doc.data().todo,
    inProgress: doc.data().inProgress
   }))
   );
  });
 };

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

  <div className="todo-app" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
   <h1>Scheduler ⏰ </h1>
   <form className="todo-app__form" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    {/* TEXTFIELD */}
    <TextField className="todo-app__text-field"
     id="standard-basic"
     label="What's Today's Plan?"
     variant="standard"
     value={todoInput}
     onChange={(e) => {
      setTodoInput(e.target.value);
     }}
     style={{ maxWidth: '300px', width: '90vw' }}
    />
    {/* BUTTON */}
    <Button className='button' type='submit' variant="contained" onClick={addTodo} style={{ 'display': 'none' }}>Default</Button>
   </form>
   <div className="todos-container" style={{ marginTop: '30px' }}>
    {todos.map((todo) => (
     <Todo todo={todo.todo} inProgress={todo.inProgress} id={todo.id} />
    ))}
   </div>
  </div >
 );
};

export default App;
