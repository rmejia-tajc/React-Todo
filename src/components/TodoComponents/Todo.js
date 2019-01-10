import React from 'react';


function Todo(props) {
  return (
  <div
    className={`todo task-${props.todo.completed}`}
    onClick={() => props.toggleTask(props.todo.id)}
  >
    {props.todo.task}
  </div>
  );
}


export default Todo;
