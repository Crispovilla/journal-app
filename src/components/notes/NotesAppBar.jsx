import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes'


export const NotesAppBar = () => {

  const dispatch = useDispatch()

  const { active } = useSelector( state => state.notes )

  const handleSave = () => {
    dispatch( startSaveNote( active ) )
  }

  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click()
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if ( file ) {
      dispatch( startUploading( file ) )
      
    }
  }


   
  return (
    <div className='notes__appbar'>
        <span>18 June 2022</span>

        <input 
          id='fileSelector'
          name='file'
          style={{ display: 'none' }}
          type="file"
          onChange={ handleFileChange }
          />
        <div>
            <button 
            onClick={ handlePictureClick }
            className='btn'>
                Picture
            </button>
            <button 
            onClick={handleSave}
            className='btn'
            >
                Save
            </button>
        </div>

    </div>
  )
}
