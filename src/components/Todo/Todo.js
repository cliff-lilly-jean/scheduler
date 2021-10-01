import { collection, updateDoc, doc, deleteDoc } from '@firebase/firestore';
import db from '../../firebaseConfig';
import { Button, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import './Todo.css';

const Todo = ({ todo, inProgress, id }) => {

 const collectionRef = collection(db, 'todos');

 const toggleInProgress = () => {
  updateDoc(doc(collectionRef, id), {
   inProgress: !inProgress
  });
 };

 const deleteTodo = () => {
  deleteDoc(doc(collectionRef, id));
 };

 return (
  <div className="todo">
   <ListItemButton>
    <ListItemText primary={todo} secondary={inProgress ? 'In Progress 🧑🏾‍💻' : 'Completed ✅'} />
   </ListItemButton>
   <Button onClick={toggleInProgress}>{inProgress ? 'Done' : 'Undone'}</Button>
   <Button onClick={deleteTodo}>❌</Button>
  </div>
 );
};

export default Todo;
