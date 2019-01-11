import React from 'react';


function TodoForm(props) {
  return (
    <form className="taskForm" onSubmit={props.addNewTodo}>
      <input
        value={props.task}
        type="text"
        name="task"
        placeholder="Task"
        onChange={props.handleChanges}
      />

      <button type="submit">Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
}


export default TodoForm;
