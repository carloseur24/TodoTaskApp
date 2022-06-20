import React, { useContext } from 'react'
import {Form,CreateTodoButton,CreateTodoButtonText,TodoCounter,TodoItem,TodoList,TodoSearch,Header} from '../components';
import { TodoContext } from '../TodoContext/index';
import '../App.css';
import Title from '../components/Title';

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
        <div>
            <Title/>
            <Header>
            {/* <Header> */}
            {length !== 0 ? (<TodoCounter  />) : "" }
            {length !==0 ? (<TodoSearch />) : "" }
            <Form class={"no-margin-top"}/>
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
            
            <CreateTodoButton/>
            </Header>
        </div>
    )
}

export {AppUI};