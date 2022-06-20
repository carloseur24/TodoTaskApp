import Modal from '../Modal'
import React, { useContext } from 'react'
import {CreateTodoButton,CreateTodoButtonText,TodoCounter,TodoItem,TodoList,TodoSearch,Header} from '../components';
import { TodoContext } from '../TodoContext/index';
import '../styles/App.css';
import Title from '../components/Title';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const AppUI = () => {
    const {
        error, 
        loading,
        length, 
        completeTodo, 
        deleteTodo,
        searchedTodos
    } = useContext(TodoContext);

    return (
        <Router>
            <Title/>
            <Routes>
            <Route path='/' element={<Header>
            {/* <Header> */}
            {length !== 0 ? (<TodoCounter  />) : "" }
            {length !==0 ? (<TodoSearch />) : "" }
            <Modal class={"no-margin-top"}/>
            {error && <p> Ocured an Error loading </p>}
            {loading && <p className='space space-up'> Wait! </p>}
            {(!loading && !length) && (<CreateTodoButtonText/>)}
            {length > 0 ? ( 
            <TodoList>
                {searchedTodos.map(
                    (todo) => (
                    <TodoItem  
                        key={todo.id} 
                        text={todo.text}
                        completed= {todo.completed}
                        onComplete = {()=> completeTodo(todo.id)}
                        onDelete = {() => deleteTodo(todo.id)}
                        length={length} 
            />))}
            </TodoList>
            ) : (
                <p className='space space-bottom'> 
                    Not Task to Show
                </p>
                )}
            
            <CreateTodoButton  >

                </CreateTodoButton>
                {/* </Header> */}
                </Header>}/>
            </Routes>
        </Router>
    )
}

export {AppUI};