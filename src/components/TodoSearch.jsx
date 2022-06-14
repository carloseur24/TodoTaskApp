import React, { useContext, useState } from "react";
import { RiDeleteBack2Line } from "react-icons/ri";
import { TodoContext } from "../TodoContext";

const TodoSearch = () => {
  const {searchValue, setSearchValue,searchedTodos } = useContext(TodoContext); 
    const onSearchValueChange = (event) => {
      const search = event.target.value
        setSearchValue(search);
    };
    const onCancel = ()=> setSearchValue("")
  return (
    <React.Fragment>
      <div className="flex2">

      <input
        className={`search search-hover ${searchedTodos.length == 0 ? "overline  search-hover-red" : ""}`}
        placeholder="ToDos"
        value={searchValue}
        onChange={onSearchValueChange}
        />
      <button className='not-save2 search' type="button" onClick={onCancel}><RiDeleteBack2Line/></button>
        </div>
      {(searchedTodos.length == 0) && <p className='space space-up color-red'>  Not Results found! </p>}
    </React.Fragment>
  );
};
export default TodoSearch;
