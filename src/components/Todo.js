import React, { useRef, useReducer } from 'react'
import useFetch from '../hooks/useFetch';
import todoReducer from '../reducers/todoReducer';

const Todo = () => {
  
  const allTodos = useFetch('https://jsonplaceholder.typicode.com/todos');
  console.log(allTodos); // TODO: you can work on displaying all todos

  // creating a ref to capture the user input in fn comp
  const todoInputRef = useRef(null);
  
  const [todoState, todoDispatch ] = useReducer(todoReducer);
  console.log(todoState);

  const handleAddTodo = () => {
    console.log(todoInputRef.current.value);
    todoDispatch({
      type: 'ADD_TODO',
      payload: todoInputRef.current.value
    });
  }

  let todos = null;
  if(todoState && todoState.length > 0 ){
    todos = todoState.map( (todo, index) => {
      return( 
        <li className="list-group-item" key={index}>
          {todo.title}
          <button type='button' className='btn btn-danger btn-sm float-end'>Delete</button>
          <button type='button' className='btn btn-info btn-sm float-end'>Edit</button>
        </li>
      )
    });
  }
  
  return (
    <div className='row'>
      <div className='col-md-6 offset-md-3'>
        <h3>Todo | useRef() and useReducer() Demo</h3>
        <input type="text" className='form-control' ref={todoInputRef}/> <br/>
        <button type="button" className='btn btn-success' 
        onClick={handleAddTodo}>ADD</button>

        <h4>Todo Items</h4>
        <ul className="list-group">
         {todos && todos.length > 0? 
          todos
          :
          <div className='alert alert-warning'>
            No Todos found. You can add one.
          </div>
         }
          

        </ul>
      </div>

    </div>
  )
}

export default Todo
