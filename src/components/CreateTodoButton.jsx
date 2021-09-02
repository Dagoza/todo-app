import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext';

export const CreateTodoButton = () => {
    const { setOpenModal} = useContext(TodoContext);
    const handleAddTodo = () => {
        setOpenModal(prev => !prev)
    }
    return (
        <button onClick={handleAddTodo}>
            Add
        </button >
    )
}
