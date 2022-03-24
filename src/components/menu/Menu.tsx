import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MenuOpenContext } from '../../contexts/MenuContext';
import './menu.scss';

const Menu = () => {

    const {menuOpen, setMenuOpen} = useContext(MenuOpenContext)
  return (
<div className={"menu "+(menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <Link to=''>Home</Link>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <Link to='about'>About</Link>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <Link to='contact'>Contact</Link>
            </li>
        </ul>    
    </div>
  )
}


export default Menu