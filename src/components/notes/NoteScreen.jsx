import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'


export const NoteScreen = () => {

    const dispatch = useDispatch()
    const { active:note } = useSelector( state => state.notes );
    const [ formValues, hanldeInputChange, reset ] = useForm( note );
    const { body, title, id } = formValues;
    const activeId = useRef( note.id )

    useEffect(( ) => {

        if( note.id !== activeId.current ) {
            reset( note );
            activeId.current = note.id
        }
    }, [note, reset])

    useEffect(() => {
        dispatch( activeNote(formValues.id, {...formValues}) )
    }, [formValues, dispatch])

    const handleDelete = () => {
        dispatch( startDeleting( id ) )

    }
    
  return (
    <div className='notes__main-content'>
        <NotesAppBar />
        <div className='notes__content'>
            <input 
                placeholder='Some awesome title'
                className='notes__title-input'
                name='title'
                type="text"
                autoComplete='off'
                value={ title }
                onChange={ hanldeInputChange }
            />
            <hr />
            <textarea 
                className='notes__textarea'
                name='body'
                placeholder='What happened today'
                value={ body }
                onChange={ hanldeInputChange }
                >            
            </textarea>

            {
                (note.url) &&
            (<div className='notes__image'>
                <img 
                    src={ note.url } 
                    alt="img" />
            </div>)
            }
           


        </div>
        <button
            className='btn btn-danger'
            onClick={ handleDelete }
        >
            Delete
        </button>

    </div>
  )
}
