import React, {Fragment} from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';


const TodoList = ({todos, removeTodo, toggleTodo}) => {
  return (
    <Paper>
      <List>
      {todos.map(todo => {
        return (
          <Fragment>
            <Todo 
              id={todo.id}
              task={todo.task} 
              key={todo.id} 
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />
            <Divider />
          </Fragment>
        )
      })}
      </List>
    </Paper>
  )
}

export default TodoList;