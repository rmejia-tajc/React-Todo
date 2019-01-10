import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todoData,
      task: ''
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewTodo = event => {
    event.preventDefault();
    this.setState({
      todoList: [
        ...this.state.todoList,
        {task: this.state.task, id: Date.now(), completed: false}
      ],
      task: ''
    });
  };

  render() {
    console.log(this.state.todoList);
    return (
      <div className="App">
        <TodoList todoDataList={this.state.todoList} />
        <TodoForm
          addNewTodo={this.addNewTodo}
          handleChanges={this.handleChanges}
          task={this.state.task}
        />
      </div>
    );
  }
}


export default App;
