import { useState } from 'react'
import Search from '../assets/search.svg'
import Fav from '../assets/fav.svg'
import { NavLink } from 'react-router-dom'
const Header = () => {

     const [toggleState, setToggleState] = useState(false)

     const toggleMenu = () => {
          console.log("JS sucksssss");
          
          setToggleState(!toggleState);
     }


     return (
          <div className='head-container'>
               <h1>Classic Books</h1>
               <div className='nav-container'>
                    <ul className={ toggleState ? "nav active-nav" : "nav"}>
                         <li><NavLink to="/">Home</NavLink></li>
                         <li><NavLink to="/Authors" >Authors</NavLink></li>
                         <li><NavLink to="/Genre">Genre</NavLink></li>
                    </ul>
               </div>
               <div className="icons">
                    <div className="search icon">
                         <img src={Search} />
                    </div>
                    <div className="fav icon">
                         <img src={Fav} />
                    </div>
                    <div className={ toggleState ? "menu-toggle active-menu" : "menu-toggle"} onClick={toggleMenu}>
                         <div className='bar'></div>
                         <div className='bar'></div>
                         <div className='bar'></div>
                    </div>
               </div>
          </div>
     )
}

export default Header
