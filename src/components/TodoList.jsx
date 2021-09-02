import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const {todoList, searchValue} = useContext(TodoContext);
    const todoListFilter = todoList.filter((todo) => 
        todo.text.toLowerCase().includes(searchValue.toLowerCase()));

    if(!todoListFilter.length){
        return <p>Crea un nuevo todo</p>
    }

    return (
        <div>
            <ul>
            {todoListFilter.map((item, index)=>(
                <TodoItem key={index} {...item}/>
            ))}
            </ul>
        </div>
    )
}
