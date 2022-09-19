import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {

  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [todosList, setTodosList] = useState([]);
  const [newDueDate, setNewDueDate] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response)=> {
      setTodosList(response.data);
    });
  }, []);

  const submitTask = () => {
    Axios.post("http://localhost:3001/api/insert", {
      task: task, 
      dueDate: dueDate,
    });

      setTodosList([...todosList, {
        task: task, dueDate: dueDate
      }]);
  };

  const deleteTask = (task) => {
    Axios.delete(`http://localhost:3001/api/delete/${task}`);
  };

  const updateTask = (task) => {
    Axios.put("http://localhost:3001/api/update", {
      task: task,
      dueDate: newDueDate,
    });
    setNewDueDate("");

  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <div className="form">
        <label>Task to do:</label>
        <input type="text" name="task" onChange={(e)=>{
          setTask(e.target.value)
        }}/>
        <br/><br/>
        <label>Due date:</label>        
        <input type="text" name="duedate" onChange={(e)=>{
          setDueDate(e.target.value)
        }}/> 
        <br/><br/>
        <button onClick={submitTask}>Add Task</button>
        <br/><br/> <br/><br/>
              <thead>
                <tr>
                  <th>Task:</th>
                  <th>Due Date:</th>
                  <th>Actions:</th>                  
                </tr>
              </thead>

        {todosList.map((val) => {
          return (
            <tbody>
                 <tr>
                  <td>{val.task}</td>
                  <td>{val.dueDate}</td>
                  <td>
                    <input type="text" onChange={(e)=>{setNewDueDate(e.target.value);}}/>
                    <button onClick={()=> {updateTask(val.task)}}>Update</button>
                    <button onClick={() => {deleteTask(val.task)}}>Delete</button>
                  </td>
                </tr>             
            </tbody>
          );
        })}
      </div>
    </div>
  );
}

export default App;
