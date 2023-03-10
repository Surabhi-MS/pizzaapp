import Logo from '../assets/pizzaLogo.png'
import '../App.css'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'


function Navbar() {
  
return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={Logo} alt=''/>
        <div className='hiddenLinks'></div>
      </div>
      <div className='righttSide'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        
      </div>
    </div>
  )
}

export default Navbar
