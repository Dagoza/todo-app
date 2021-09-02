import React, { useContext, useRef } from 'react'
import { TodoContext } from '../context/TodoContext';
import '../styles/components/AddForm.css';

export const AddForm = () => {
    const newTodoRef = useRef('');
    const {createTodo, setOpenModal } = useContext(TodoContext);
    const handleCloseModal = () => {
        setOpenModal(prev => !prev);
    }
    const handleCreateTodo = () => {
        createTodo(newTodoRef.current.value);
        handleCloseModal();
    }
    return (
        <div className="add-todo">
            <h3>Add your TODO</h3>
            <textarea type="text" ref={newTodoRef} />
            <button onClick={handleCreateTodo}>Add</button>
            <button onClick={handleCloseModal} >Cancel</button>
        </div>
    )
}
