import axios from 'axios';

const TaskList = ({ tasks, setTasks }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleCompleteToggle = async (id, currentStatus) => {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
        isComplete: !currentStatus,
      });
      setTasks(
        tasks.map((task) =>
          task._id === id ? { ...task, isComplete: !currentStatus } : task
        )
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <span style={{ textDecoration: task.isComplete ? 'line-through' : 'none' }}>
              {task.taskName}
            </span>
            <button onClick={() => handleCompleteToggle(task._id, task.isComplete)}>
              {task.isComplete ? 'Incomplete' : 'Complete'}
            </button>
            <button id="delete" onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
