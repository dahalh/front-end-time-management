import './App.css';
import React, {useState} from "react";
import {Title } from "./components/Title.js";
import {Form } from "./components/Form.js";
import {TaskList } from "./components/TaskList.js";
import {BadList } from "./components/BadList.js";
import {TotalHours } from "./components/TotalHours";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [badList, setBadList] = useState([]);


  const addNewTask = (task) => {
    setTaskList([...taskList, task]);
  };

  // delete the task for task list
  const handleOnDeleteTaskList = i => {
    console.log(i);

    if(window.confirm("Are you sure you want to delete this task?"))
    {
      const newArg = taskList.filter((item, index) => index !== i)
      setTaskList(newArg);
    }
  }

  const handleOnDeleteBadList = i => {
    console.log(i);

    if(window.confirm("Are you sure you want to delete this task?"))
    {
      const newArg = badList.filter((item, index) => index !== i)
      setBadList(newArg);
    }
  }

    // take item from taskList and put it in the BadList
    const markAsNotToDo = i => {
      const selectedItem = taskList[i];

      setBadList([...badList,selectedItem]);
      const newArg = taskList.filter((item, index) => index !==i)
      setTaskList(newArg);
    }

    // take item from badlist and put it in the goodlist
    const markAsTask = i => {
      const selectedItem = badList[i];
      setTaskList([...taskList,selectedItem]);

      const newArg = badList.filter((item, index) => index !==i)
      setBadList(newArg);
    }

  


  return (
    <div className="wrapper">
        <div className="container">
            {/* <!-- top title --> */}
            <Title />
            {/* <!-- form area --> */}
            <Form  addNewTask={addNewTask}/>
            {/* <!-- list area --> */}
            <div className="row">
                <TaskList taskList={taskList} handleOnDeleteTaskList={handleOnDeleteTaskList} markAsNotToDo={markAsNotToDo} />
                <BadList  badList={badList} handleOnDeleteBadList={handleOnDeleteBadList} markAsTask={markAsTask}
                />
            </div>
            
                <TotalHours />
        </div>
    </div>
  );
}

export default App;
