import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import bars from './img/bars-solid.svg'
import Cart from './img/shopping-cart-solid.svg'
import close from './img/times-solid.svg'
import './css/header.css'
import { DataContext } from './Context'

export default function Header() {
   const [menu, setMenu] = useState({ toggle: false });
   const { cart } = useContext(DataContext);

   const menuToggle = () => {
      setMenu({ toggle: !menu.toggle });
   }

   return (
      <header>
         <div className="menu">
            <img onClick={menuToggle} src={bars} width="20" alt="bars" />
         </div>
         <div className="logo">
            <h1><Link to="/">NIKE</Link></h1>
         </div>
         <nav>
            <ul className={menu.toggle ? "toggle" : ""}>
               <li><Link onClick={menuToggle} to="/">Home</Link></li>
               <li><Link onClick={menuToggle} to="/">Product</Link></li>
               <li><Link onClick={menuToggle} to="/contact">Contact</Link></li>
               <li><Link onClick={menuToggle} to="/about">About</Link></li>
               <li><Link onClick={menuToggle} to="/login">Login/Register</Link></li>
               <li className="close" onClick={menuToggle} >
                  <img src={close} alt="close" width="20" />
               </li>
            </ul>
         </nav>
         <div className="cart">
            <Link to="/cart">
               <img src={Cart} width="20" alt="close" />
               <span>{cart.length}</span>
            </Link>
         </div>
      </header>
   )
}
