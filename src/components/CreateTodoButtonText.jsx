import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'

const CreateTodoButtonText = () => {
  const { setState } = useContext(TodoContext)

    return (
      <div>
        <button className='btn-text' onClick={setState}>
        Create a new task Now! 
        </button>
      </div>
    )
  }
export default CreateTodoButtonText