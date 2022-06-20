import React from 'react';
import ReactDOM from 'react-dom/client';
import {AppUI} from './AppUI';
import {TodoProvider} from './TodoContext'
import './styles/index.css'
import { BrowserRouter,
  Routes,
  Route} from "react-router-dom"


const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render( 
  <BrowserRouter>
  <React.StrictMode>
    <TodoProvider>
      <Routes>
          <Route path='/' element={<AppUI/>} />
      </Routes>
    </TodoProvider>
  </React.StrictMode>
  </BrowserRouter>
);