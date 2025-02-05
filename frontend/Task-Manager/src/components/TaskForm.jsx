import { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ setTasks }) => {
  const [taskName, setTaskName] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskData = {
      taskName,
      isComplete,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/tasks`, taskData);
      setTasks((prevTasks) => [...prevTasks, response.data.data]);
      setTaskName('');
      setIsComplete(false);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
        required
      />
      
      <button id="add">Add Task</button>
    </form>
  );
};

export default TaskForm;
