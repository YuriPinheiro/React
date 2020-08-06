import React from 'react';
import Logo from '../../assets/img/logo.png'
import './Menu.css'
import {Link} from 'react-router-dom'
import Button from '../Button'
function Menu(props){
    return (
        <nav className="Menu">
           
        <Link to='/'>
            <img class='Logo' src={Logo} alt='LojaFlix Logo'/>
        </Link>

        <Button as={Link} className="ButtonLink" to={props.href}>
            {props.children}
        </Button>
        
        </nav>
    );
}

export default Menu;