import React from 'react';
import ReactDOM from 'react-dom/client';
import {AppUI} from './AppUI';
import {TodoProvider} from './TodoContext'
import './index.css'
// import { BrowserRouter,
//   Routes,
//   Route} from "react-router-dom"


const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render( 
  <TodoProvider>
          <AppUI/>
    </TodoProvider>
);