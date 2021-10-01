import React from 'react';

const Todo = ({ todo, inProgress, id }) => {
 return (
  <div>
   <p>{todo}</p>
  </div>
 );
};

export default Todo;
