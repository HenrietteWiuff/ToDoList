import React from 'react';
 
const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        // e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

   return (
       
       <div id={todo.id} className={todo.complete ? "strike" : ""} onClick={handleClick}>
        <input class="form-check-input" type="checkbox" value="" checked={todo.complete} id={todo.id} ></input>
           {todo.task}
       </div>
   );
};
 
export default ToDo;