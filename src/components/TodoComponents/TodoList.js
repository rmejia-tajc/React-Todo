import React from 'react';

import Todo from './Todo';


function TodoList(props) {
  return (
    <div>
      {props.todoDataList.map((todo) => {
        return (
            <Todo 
                todo={todo} 
                key={todo.id}
                toggleTask={props.toggleTask}
            />
        );
      })}
    </div>
  );
}


export default TodoList;
