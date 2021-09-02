import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { v4 as uuidv4 } from 'uuid';

const todos = [
  { id:0, text: 'Cortar cebolla', isCompleted: true},
  { id:1, text: 'Tomar el curso de intro a React', isCompleted: false},
  { id:2, text: 'Llorar con la llorona', isCompleted: false},
]

export const useToDoList = () => {
  const [ todoList, saveTodos ] = useLocalStorage('TODO_V1', todos);
  const [ openModal, setOpenModal ] = useState();
  const [searchValue, setSearchValue] = useState('');

  const toggleTodo = payload => {
    const newList = [...todoList];
    newList.find(todo => todo.id === payload.id).isCompleted = !payload.isCompleted;
    saveTodos(newList);
  };

  const deleteTodo = payload => {
    const newList = [...todoList];
    const indexToDelete = newList.findIndex(todo => todo.id === payload);
    newList.splice(indexToDelete, 1);
    saveTodos(newList);
  }

  const createTodo = payload => {
    const id = uuidv4();
    const newList = [...todoList];
    newList.push({id, text: payload, isCompleted: false});
    saveTodos(newList);
  }

  return {
      todoList,
      searchValue,
      setSearchValue,
      toggleTodo,
      createTodo,
      deleteTodo,
      openModal,
      setOpenModal
  }
}