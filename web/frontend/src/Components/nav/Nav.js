import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Nav.css';

const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/signup')//ye check karenga pura 
  }

  return (
    <> 
    <nav>
    <Link to="/"><img className='logo' src="http://localhost:3000/logo192.png" alt="/logo" /></Link>
{auth ? (
      <ul className='nav-ul'> 
      <li><Link to="/">My Meeting List</Link></li>
      <li><Link to="/add">Add Meeting</Link></li>
      {/*<li><Link to="/update">Update Meeting</Link></li>
      <li><Link to="/profile">Profile</Link></li>*/}
      <li><Link onClick={logout} to="/signup">Logout</Link></li>
      <li><Link to="/profile">Hello {JSON.parse(auth).name}</Link></li>
      </ul>
):(
      <ul className='nav-ul nav-right'>
      <li><Link to="/signup">Sign Up</Link></li>
      <li><Link to="/login">Login</Link></li>
      
      </ul>
)}
      </nav>
    </>
  )
}

export default Nav

