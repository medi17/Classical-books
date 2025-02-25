import Search from '../assets/search.svg'
import Fav from '../assets/fav.svg'

const Header = () => {
     return (
          <div className='head-container'>
               <h1>Classic Books</h1>
               <div className='nav-container'>
                    <ul className='nav'>
                         <li><a href="/">Home</a></li>
                         <li><a href="/Authors">Authors</a></li>
                         <li><a href="/Genre">Genre</a></li>
                         <li><a href="/About">About</a></li>
                    </ul>
               </div>
               <div className="icons">
                    <div className="search icon">
                         <img src={Search} />
                    </div>
                    <div className="fav icon">
                         <img src={Fav} />
                    </div>
                    <div className="menu-toggle">
                         <div></div>
                         <div></div>
                         <div></div>
                    </div>
               </div>
          </div>
     )
}

export default Header
