import React, { useContext } from 'react'
import {BsFillPlusSquareFill} from 'react-icons/bs'
import {TodoContext} from '../TodoContext'

const CreateTodoButton = () => {
const {
  openModal,
  setopenModal,
  setState
} = useContext(TodoContext)

  return (
    <div>
      <button className='btn btn-hover' onClick={setState} >
        {<BsFillPlusSquareFill/>}
      </button>
    </div>
  )
}

export default CreateTodoButton