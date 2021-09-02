import { createContext } from "react";
import { useToDoList } from '../hooks/useToDoList'

export const TodoContext = createContext({});

export const TodoProvider = ({children}) => {
  const toDoList = useToDoList();
    
  return (
    <TodoContext.Provider value={toDoList}>
        {children}
    </TodoContext.Provider>
  );
}
