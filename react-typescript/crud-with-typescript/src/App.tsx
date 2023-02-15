import React, { Fragment, useState, useRef } from "react";
import "./App.css";

import "bootswatch/dist/lumen/bootstrap.min.css";

type formElement = React.FormEvent<HTMLFormElement>;

interface iTask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTask] = useState<iTask[]>([]);
  const taskInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: formElement) => {
    event.preventDefault();
    addTask(newTask);
    taskInput.current?.focus();
  };

  const addTask = (name: string): void => {
    const newTasks: iTask[] = [...tasks, { name, done: false }];
    setTask(newTasks);
    setNewTask("");
    setTask(newTasks);
  };

  const toggleOnTask = (i: number): void => {
    const newTasks: iTask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTask(newTasks);
  }

  const removeTask = (i: number): void => {
    const newTasks: iTask[] = [...tasks];
    newTasks.splice(i,1);
    setTask(newTasks);
  }

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md6 offset-md3-3">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <input
                    className="form-control"
                    type="text"
                    onChange={(event) => setNewTask(event.target.value)}
                    value={newTask}
                    ref={taskInput}
                    autoFocus
                  />
                  <button className="btn btn-success btn-block mt-2">
                    Guardar
                  </button>
                </form>
              </div>
            </div>
            {tasks.map((t: iTask, i: number) => (
              <div key={i} className="card card-body mt-2">
                <h2 style={{textDecoration: t.done ? 'line-through' : ''}}>{t.name}</h2>
                <div>
                  <button className='btn btn-secondary' onClick={() => toggleOnTask(i)}>
                    {t.done ? '✓' : '✗'}
                  </button>
                  <button className="btn btn-danger" onClick={() => removeTask(i)}>
                    🗑
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
