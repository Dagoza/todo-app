import { useContext } from 'react';
import { createPortal } from 'react-dom'
import { TodoContext } from '../context/TodoContext';
import '../styles/modals/Modal.css'

export const Modal = ({children}) => {
    const {setOpenModal} = useContext(TodoContext);
    return createPortal(
        <div className="modal">
            <header>
                <button onClick={()=>setOpenModal(prev => !prev)}>
                    Close X
                </button>
            </header>
            {children}
        </div>,
        document.getElementById('modal')
    );
}