import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';


const EditTodoForm = ({editTodo, id, task, toggle}) => {
  const [value, handleChange, reset] = useInputState(task);

  return (
    <form action="" 
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggle();
      }}
      style={{marginLeft: '1rem', width: '50%'}}
    >
      <TextField  margin="normal" value={value} onChange={handleChange} fullWidth autoFocus/>
    </form>
  )
}

export default EditTodoForm;