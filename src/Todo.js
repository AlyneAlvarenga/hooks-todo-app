import React from 'react';
import useToggle from './hooks/useToggle';
import EditTodoForm from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


function Todo({task, completed, removeTodo, toggleTodo, id, editTodo}) {
  const [isEditing, toggle] = useToggle();

  return (
    <ListItem style={{height: '64px'}}>
      { isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggle={toggle} /> : 
      <>
        <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
        <ListItemText style={{textDecoration: completed ? "line-through" : "none" }}>
          {task}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label="delete" onClick={() => removeTodo(id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit" onClick={toggle}>
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </>
      }
    </ListItem>
  );

}

export default Todo;