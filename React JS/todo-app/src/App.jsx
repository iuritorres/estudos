// Imports
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks/"
import { useState, useEffect } from "react";

// Local Storage key
const LOCAL_STORAGE_KEY = "todo:savedTasks";

// App
function App() {

  const [ tasks, setTasks ] = useState([]);

  // Load Tasks of the LocalStorage
  const loadSavedTasks = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (saved) {
      setTasks(JSON.parse(saved));
    }
  };

  useEffect(() => {
    loadSavedTasks();
  }, [])

  // Save Tasks in LocalStorage
  const setTasksAndSave = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  // Add new Tas in tasks list
  const addTask = (taskTitle) => {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  };

  // Delete Task on trash icon
  const deleteTaskById = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks);
  }; 

  // Change style of completed tasks
  const toggleTaskCompletedById = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id == taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }

      return task;
    });
    setTasksAndSave(newTasks);
  };

  // Component return
  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onComplete={toggleTaskCompletedById}
        onDelete={deleteTaskById}
      />
    </>
  );

  // EventListener to add task at press "Enter"
  let input = document.getElementById("inputTask");
  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      input.click();
    }
  });
};

export default App;
