import React from 'react';
import ReactDOM from 'react-dom/client';
import {AppUI} from './AppUI';
import {TodoProvider} from './TodoContext'
import './styles/index.css'


const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render( 
  <React.StrictMode>
    <TodoProvider>
          <AppUI />
    </TodoProvider>
  </React.StrictMode>
);