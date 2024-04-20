import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './navbar.css'
import LOGO from '../../assets/citifi-logo-minimal.png'

const Navbar = () => {
  return (
    <nav className='nav'>
        <Link to='/' className='site-title'>
            <img src={LOGO} alt='citifi logo' className='logo'/>
        </Link>
        <ul>
            <CustomLink to='/what' className='link' >What we do</CustomLink>
            <CustomLink to='/who' className='link' >Who we are</CustomLink>
        </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar