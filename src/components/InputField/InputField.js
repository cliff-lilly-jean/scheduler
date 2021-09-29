import React, { useState } from 'react';

// MATERIAL UI
import TextField from '@mui/material/TextField';

const InputField = (props) => {

 const [todoInput, setTodoInput] = useState('');

 return (
  <div>
   <TextField
    className="todo-app__text-field"
    id="standard-basic"
    label="What's Next?"
    variant="standard"
    value={props.todoInput}
    onChange={(e) => {
     props.setTodoInput(e.target.value);
    }}
   />
  </div>
 );
};

export default InputField;
