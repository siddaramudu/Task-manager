import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks } from "./taskService";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = () => {
    getTasks().then((response) => setTasks(response.data));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm editingTask={editingTask} onTaskCreated={loadTasks} />
      <TaskList
        tasks={tasks}
        onEdit={setEditingTask}
        onTaskDeleted={loadTasks}
      />
    </div>
  );
};

export default App;
