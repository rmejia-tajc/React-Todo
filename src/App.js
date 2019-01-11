import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


const todoData = [
  {
    task: 'Attend class',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Panic',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Work on project',
    id: 1528817084368,
    completed: false
  },
  {
    task: 'Give up on project',
    id: 1528817084378,
    completed: false
  },
  {
    task: 'Finish project',
    id: 1528817084388,
    completed: false
  },
  {
    task: 'Celebrate',
    id: 1528817084398,
    completed: false
  },
  {
    task: 'Forget everything learned',
    id: 1528817084408,
    completed: false
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
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

  toggleTask = id => {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: todo.completed === false ? true : false //or !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(
        todo => !todo.completed // or todo.completed === false
      )
    });
  };

  render() {
    console.log(this.state.todoList);
    return (
      <div className="App">
        <h1 className="appTitle">My To Do List</h1>
        <TodoForm
          clearCompleted={this.clearCompleted}
          addNewTodo={this.addNewTodo}
          handleChanges={this.handleChanges}
          task={this.state.task}
        />
        <TodoList 
          todoDataList={this.state.todoList}
          toggleTask={this.toggleTask}
        />
        <TodoForm
          clearCompleted={this.clearCompleted}
          addNewTodo={this.addNewTodo}
          handleChanges={this.handleChanges}
          task={this.state.task}
        />
      </div>
    );
  }
}


export default App;
