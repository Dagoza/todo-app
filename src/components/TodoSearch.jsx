import React, { useContext, useRef } from 'react'
import { TodoContext } from '../context/TodoContext';

export const TodoSearch = () => {
    const {searchValue, setSearchValue} = useContext(TodoContext);
    const ref = useRef('');
    const handleSearch = () => {
        setSearchValue(ref.current.value);
    }
    return (
        <input 
        placeholder="Todo"
        ref={ref}
        value={searchValue}
        onChange={handleSearch}
        />
    )
}
