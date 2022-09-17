import React from 'react'
import './notes.css'
import { Add } from '@mui/icons-material'

const Notes = () => {
  return (
    <div className='notes'>
      <div className="greeting">Good Morning, What plans do you have today?</div>
      <div className='header'>
        <h3>Notes</h3>
        <button className='button'><Add className='svg'/></button>
      </div>
    </div>
  );
}

export default Notes