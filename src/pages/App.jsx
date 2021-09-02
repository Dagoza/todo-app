import { useContext } from 'react';
import {
  TodoCounter,
  TodoList,
  TodoSearch,
  CreateTodoButton
} from '../components';
import { AddForm } from '../components/AddForm';
import { TodoContext } from '../context/TodoContext';
import { Modal } from '../modals/Modal';

export const App = () => {
  const {openModal} = useContext(TodoContext);
  return (
    <>
      <h1>TODO </h1>
      <TodoCounter />
      <TodoSearch />
      <TodoList/>
      <CreateTodoButton />
      {
        openModal && <Modal>
          <AddForm />
        </Modal>
      }
   
  </>
  );
}