import React from 'react'
import './tasks.css'
import { Add } from '@mui/icons-material'
import Task from '../task/task'

const Notes = () => {
  return (
    <div className='tasks'>
      <div className="greeting">Good Morning, What plans do you have today?</div>
      <div className='header'>
        <h3>Tasks</h3>
        <button className='button'><Add className='svg'/></button>
      </div>
      <Task/>
    </div>
  );
}

export default Notes