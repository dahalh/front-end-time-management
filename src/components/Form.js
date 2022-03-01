import React, {useState} from "react";

const initialState = {task: "", hr: ""};
const weeklyHours = 168;

export const Form = ({addNewTask, total}) => {
  const [newTask, setNewTask] = useState(initialState);

  const handleOnSubmit = e => {
    e.preventDefault();
    
    if (newTask.hr < 1){
      return alert("please enter a positive number");
    }
    if (total + newTask.hr > weeklyHours) {
      return alert("You have exceeded the weekly hours");
    }
    addNewTask(newTask);
    setNewTask(initialState);
    
  };

  const handleOnChange = e => {
    // desconstruct to make code look nicer
    const {value, name} = e.target;
    setNewTask({
      // using spread operator to keep the data we already have and add new data
      ...newTask,
      [name]: name === "hr" ? +value : value,
    });
  };

  return (
    <div className="row">
      <div className="col">
        <div className="form-box py-5">
          <form
            onSubmit={handleOnSubmit}
            className="row row-cols-md-auto d-flex justify-content-center g-3"
          >
            <div className="col-12">
              <label className="visually-hidden">
                Your Task
              </label>
              <div className="input-group">
                <input
                  type="text"
                  name="task"
                  onChange={handleOnChange}
                  value={newTask.task}
                  className="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder="Your Task"
                  required
                />
              </div>
            </div>

            <div className="col-12">
              <label className="visually-hidden">
                Hours
              </label>
              <div className="input-group">
                <input
                  type="number"
                  name="hr"
                  onChange={handleOnChange}
                  value={newTask.hr}
                  className="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder="Hours"
                  required
                />
              </div>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
