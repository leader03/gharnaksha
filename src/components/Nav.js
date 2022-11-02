import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button'
import Message from './Message';
import Profile from './Profile'

const Nav = () => {
    const [expands,setExpands] = useState(false)
  return (
    <>
    <div className='nav'>
        <div className='innernav'>
            <div className='leftnav'>
                <Button onClick={()=>setExpands(!expands)}><MenuIcon sx={{color:'white',fontSize:'30px'}} /></Button>
                <div className='logoname'>
                    <p>logo</p>
                    <span className='headername'>Ghar Naksha</span>
                </div>
            </div>
            
                <ul className='rightnav'>
                  <NavLink  to='/' className='link' activeClassName='active' end>  <li className='navfont'><Button sx={{color:'#f9fafb',letterSpacing:'1.75px'}}>Dashboard</Button></li></NavLink>
                   <NavLink to='/notice' className='link' activeClassName='active'> <li className='navfont'><Button sx={{color:'#f9fafb',letterSpacing:'1.75px'}}>Notice And Information</Button></li></NavLink>
                    <li><Message /></li>
                    <li className='profilecontainer' style={{color:'#f9fafb',letterSpacing:'0.75px'}}>Consultancy <Profile /></li>
                </ul>
            
        </div> 
    </div>
    <div className={expands ? 'sidebar expands':'sidebar not-expands'}>
        <Button onClick={()=>setExpands(!expands)}><CloseIcon sx={{color:'white',fontSize:'30px'}} /></Button>
    </div>
    </>
  )
}

export default Nav