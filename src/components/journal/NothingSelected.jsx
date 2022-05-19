import React from 'react'
import { useDispatch } from 'react-redux'
import { startNewNote } from '../../actions/notes'

export const NothingSelected = () => {

  const dispatch = useDispatch()

  const handleAddNewEntry = () => {    
      dispatch( startNewNote() )
  }
  return (
    <div className='nothing__main-content'>
        <p>
            Select something
            <br />
            or create a new entry
        </p>
        <i 
          className="fa-solid fa-circle-plus fa-4x mt-5 pointer"
          onClick={ handleAddNewEntry }
        ></i>

    </div>
  )
}
