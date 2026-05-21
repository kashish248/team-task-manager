
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tasks', {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });

      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Team Task Manager</h1>

      <h2>Tasks</h2>

      {tasks.map(task => (
        <div key={task._id} style={{
          border: '1px solid #ccc',
          padding: '10px',
          marginBottom: '10px'
        }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
