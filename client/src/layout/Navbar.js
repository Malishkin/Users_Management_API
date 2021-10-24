import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
      <div>
        <nav className='navbar bg-dark'>
          <h1>
            <Link to='/'>
              <i className='fas fa-users'></i> Users Connector
            </Link>
          </h1>
          <ul>
            <li>
              <Link to='/users'>Users</Link>
            </li>
            <li>
              <Link to='/adduser'>Add User</Link>
            </li>
            
            <li>
              <Link to='/'>Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}
