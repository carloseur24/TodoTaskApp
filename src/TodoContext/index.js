import { createContext, useState } from "react";
import {useLocalStorage} from "../useLocalStorage.js"
// const {Provider, Consumer} = createContext();
const TodoContext = createContext();

function TodoProvider(props) {
    const {
        item,
        saveItem,
        loading,
        error
    } = useLocalStorage('Todos_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setopenModal] = useState(true);
    const [text, setText] = useState('')

    //Counter
    const completedTodos = item.filter(todo => !!todo.completed).length;
    const length = item.length;
    //Serarch Bar
    let searchedTodos = [];
    if (!searchValue.length >= 1) {
        searchedTodos = item;
    } else {
        searchedTodos = item.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        })
    }
    //Complete
    const completeTodo = (id) => {
        const todoIdx = item.findIndex(todo => todo.id === id);
        const newTodos = [...item];
        if (!newTodos[todoIdx].completed) {
            newTodos[todoIdx].completed = true;
            saveItem(newTodos)
        } else {
            newTodos[todoIdx].completed = false;
            saveItem(newTodos)
        }
    }
    //Delete
    const deleteTodo = (id) => {
        const newTodos = [...item];
        saveItem(
            newTodos.filter(idx => idx.id !== id)
        )
    }

    //AddButton
    // const add = (value, set ) => {
    //     if (!value){
    //         let value = true;
    //         set(value)
    //     } else {
    //         value = false;
    //         set(value)
    //     }}
    
    const setState = ()=> setopenModal(prev => !prev);

    // Save
    const addTask = (text) => {
        const newTodos = [...item];
        newTodos.push({
            id:idCreator(1,100),
            completed:false,
            text
        })
        saveItem(newTodos)
        setState()
    }
    //Id
    const idCreator = (min, max) => { 
        const math = Math.random() * (max - min) + min;
        const random = math*100000;
            return random
        } 
    
    //clear inputs 
    const onCancel = ()=> setText("")

    return (
        <TodoContext.Provider value={{
            error,
            loading,
            completedTodos,
            length,
            completeTodo,
            deleteTodo,
            searchValue,
            searchedTodos,
            setSearchValue,
            openModal, 
            setopenModal,
            text, 
            setText,
            setState,
            saveItem,
            addTask,
            onCancel
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}