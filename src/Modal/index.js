import React, { useContext } from 'react';
import '../styles/index.css'
import { TodoContext } from '../TodoContext';
import {RiDeleteBack2Line} from 'react-icons/ri'

const Modal = () => {
    const {
        openModal,
        text,
        setText,
        addTask,
        onCancel,
        length
    } = useContext(TodoContext);

    const onSubmit = (event) =>{
        event.preventDefault()
        addTask(text)
    }
    const onChange= (event)=> setText(event.target.value);

        return(
            <React.Fragment>
            <form className={`background ${length !==0 ? "no-margin-top":""}`} onSubmit={onSubmit} hidden={openModal}>
                <div>
                <p className='black-text'>
                Create your ToDos
                </p>
                </div>
                <section >
                    <div className='form'>
                        Task
                        <div className='flex'>         
                            {<input type="text" placeholder='Description' className='form-design' value={text} onChange={ onChange}>
                                </input>}
                            <p className='not-save' type="button" onClick={onCancel}><RiDeleteBack2Line/></p>
                        </div>
                    </div>
                    <button className='save' type="submit">Save</button>
                </section>
            </form>
            <form id='form'>
            </form>
            </React.Fragment>
    )
}

export default Modal