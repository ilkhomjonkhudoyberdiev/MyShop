import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  const navStyle = {
      color: "white",
      textDecoration: 'none'
  }

    return (
        <div>
            <nav >
               <Link style={navStyle} to='/'> 
               <h3>Logo</h3>
               </Link> 
                <ul className="navLink">
              
                  <Link style={navStyle} to='/shop'>
                  <li>Shop</li>
                  </Link> 
                  <Link style={navStyle} to="/about">
                    <li>About</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
