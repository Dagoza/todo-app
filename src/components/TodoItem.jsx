import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export const TodoItem = (props ) => {
    const {toggleTodo, deleteTodo} = useContext(TodoContext);
    return (
        <li>
            <button onClick={()=> toggleTodo(props)}> {props.isCompleted ? '√' : 'X'}</button> {props.text} <button onClick={()=> deleteTodo(props.id)}> X </button>
        </li>
    )
}
