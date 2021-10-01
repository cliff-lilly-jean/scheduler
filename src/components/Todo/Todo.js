import { Button, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import './Todo.css';

const Todo = ({ todo, inProgress, id }) => {
 return (
  <div className="todo">
   <ListItem>
    <ListItemText primary={todo} secondary={inProgress ? 'In Progress 🧑🏾‍💻' : 'Completed ✅'} />
   </ListItem>
   <Button>{inProgress ? 'Done' : 'Undo'}</Button>
   <Button>❌</Button>
  </div>
 );
};

export default Todo;
