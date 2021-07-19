import React from 'react'
import { Link } from 'react-router-dom'
import {
    Logo,
    LoginSignupContainer,
    NavContainer,
} from './style'

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            <span className='NavBar-welcome'>WELCOME, {(props.user.name).toUpperCase()}&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<Link to='/track'>TRACKED EVENTS</Link></span>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<Link to='' onClick={props.handleLogout} className='NavBar-link'>LOG OUT</Link>
        </div>
        :
        <LoginSignupContainer><Link style={{textDecoration: 'none'}} to="/login">LOG IN</Link><Link style={{textDecoration: 'none'}} to="/signup">SIGN UP</Link></LoginSignupContainer>;

    return (
        <NavContainer>
           <Link className="logo" to={props.user ? '/search' : '/'}>groOvy</Link>
            {nav}
        </NavContainer>
    );
};

export default NavBar