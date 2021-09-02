import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export const TodoCounter = () => {
    const {todoList} = useContext(TodoContext);
    return (
        <h2>
            Has completado {todoList.filter(todo => todo.isCompleted).length} de {todoList.length} TODOs
        </h2>
    )
}
