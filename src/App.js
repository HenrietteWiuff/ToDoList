import React, { useState } from 'react';
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
 
import './App.css';
 
function App() {
  const [ toDoList, setToDoList ] = useState(data);
 
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }
 
 return (
   <div className="wrapper">
      <div className={"App"}>
        <Header />
        <div className="flexBox">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
          <ToDoList toDoList={toDoList} handleToggle={handleToggle}/>
        </div>
      </div>
   </div>
 );
}
 
export default App;