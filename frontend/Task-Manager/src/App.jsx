import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch all tasks when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/tasks`);
        setTasks(response.data.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [tasks]);

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm
       setTasks={setTasks} 
       />

      <TaskList 
      tasks={tasks}
       setTasks={setTasks} />
    </div>
  );
};

export default App;
