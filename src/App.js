import './App.css';
import React, {useState} from "react";
import {Title } from "./components/Title.js";
import {Form } from "./components/Form.js";
import {TaskList } from "./components/TaskList.js";
import {BadList } from "./components/BadList.js";
import {TotalHours } from "./components/TotalHours";

function App() {
  const [taskList, setTaskList] = useState([]);


  const addNewTask = (task) => {
    setTaskList([...taskList, task]);
  };

  // console.log(taskList);


  return (
    <div className="wrapper">
        <div className="container">
            {/* <!-- top title --> */}
            <Title />
            {/* <!-- form area --> */}
            <Form  addNewTask={addNewTask}/>
            {/* <!-- list area --> */}
            <div className="row">
                <TaskList taskList={taskList} />
                <BadList />
            </div>
            
                <TotalHours />
        </div>
    </div>
  );
}

export default App;
