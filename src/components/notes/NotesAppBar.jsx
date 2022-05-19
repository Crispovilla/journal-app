import React from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes'


export const NotesAppBar = ({date}) => {

  const noteDate = moment( date );
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
      <div>
        <span>{ noteDate.format('dddd') } { noteDate.format('D') }</span>
        <h4> { noteDate.format('MMMM') } { noteDate.format('YYYY') }</h4>
      </div>
         

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
            className='btn btn-bar'>
                <i className="fa-solid fa-cloud-arrow-up"></i>
            </button>
            <button 
            onClick={handleSave}
            className='btn btn-bar'
            >
                <i className="fa-solid fa-floppy-disk"></i>
            </button>
        </div>

    </div>
  )
}
