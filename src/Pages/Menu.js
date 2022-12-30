import React from 'react'
import {MenuList} from '../helpers/MenuList'
import '../styles/Menu.css'
function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
            {MenuList.map((value)=>(
                <>
                <h3>{value.name}</h3>
                <h4>{value.price}</h4>
                <img style={{width:'200px',height:'200px'}} src={`${value.image}`} alt="not displayed"></img>
                </>
            ))}
        </div>
    
    </div>
  )
}

export default Menu
