import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'

const TodoCounter = () => {
  const {length: total, completedTodos: completed} = useContext(TodoContext);

  return (
    <div>
      <h2 className='counter'>You have completed {completed} of {total} ToDos</h2>
    </div>
)
}

export default TodoCounter