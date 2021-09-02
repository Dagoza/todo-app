import React from 'react';
import ReactDOM from 'react-dom';
import { TodoProvider } from './context/TodoContext';
import './index.css';
import { App } from './pages/App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
