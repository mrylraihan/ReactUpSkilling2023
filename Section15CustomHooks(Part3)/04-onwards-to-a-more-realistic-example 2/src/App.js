import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';
function App() {
  const [tasks, setTasks] = useState([]);
  const httpData = useHttp()
  const {isLoading, error, sendRequest : fetchTasks} = httpData

  useEffect(() => {
    const transformTask = taskObj => {
      const loadedTasks = [];

      for (const taskKey in taskObj) {
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
      }

      setTasks(loadedTasks);
    }
    
    fetchTasks({ url: 'https://react-http2-3c478-default-rtdb.firebaseio.com/tasks.json' }, transformTask);
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
