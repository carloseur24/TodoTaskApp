import React from 'react';
import {BsCheck2Circle} from 'react-icons/bs'
import {MdDeleteForever} from 'react-icons/md'

const TodoItem = ({text, completed,onComplete, onDelete}) => {

  return (
    <li className={`item item-no-complete  no-select ${completed && 'item-complete' }`}>
      <section className='flex'>
        <p>{text}</p>
        <div className='icons-check-delete'>
          <span className={`btn-hover-2 check no-check ${completed && 'check-complete' }`}
                      onClick={onComplete}>
            {<BsCheck2Circle />}
          </span>
          <span className="btn-hover-2 delete delete-hover"
                      onClick={onDelete}>
            {<MdDeleteForever />}</span>
        </div>
      </section>
    </li>
  )
}

export default TodoItem