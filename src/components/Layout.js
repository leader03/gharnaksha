import React, { useContext } from 'react'
import {Routes,Route} from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import Nav from './Nav'
import DashboardPage from '../pages/DashboardPage'
import NoticePage from '../pages/NoticePage'
import NewRegister from '../pages/NewRegister'
import Application from '../pages/Application'

const Layout = () => {
  const {logoutUser} = useContext(AuthContext)
  return (
    <div className='home'>
      <Nav />
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/notice' element={<NoticePage />} />
        <Route path='/newregister' element={<NewRegister />} />
        <Route path='/application' element={<Application />} />
      </Routes>
      
    </div>
  )
}

export default Layout