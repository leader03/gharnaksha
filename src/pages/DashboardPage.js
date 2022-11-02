import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import Table from '../components/Table'

const DashboardPage = () => {
  return (
    <div className='dashboard'>
      <div className='addnew'>
          <Link to='/newregister' className='link'><Button variant="contained"><AddIcon /> <span className='stylebutton'>Add New</span></Button></Link>
      </div>
      <Table />
    </div>
  )
}

export default DashboardPage