import React, { createContext, useState } from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  const [value, setValue] = useState('');

  return (
    <TodoContext.Provider value={{ taskList, setTaskList, value, setValue }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };