
import { useState } from 'react';
import NavbarComponent from './Navbar/Navbar.Component';
import NavbarMenuComponent from './NavbarMenu/NavbarMenu.Component';

import "./Navigation.styles.css"


const NavigationComponent = () => {
  const [navbarToggle, setNavbarToggle] = useState<boolean>(false);
 const  onToggleNavbar=()=>{
     setNavbarToggle(!navbarToggle)
  }
  return (
  
        <nav className="zone blue sticky">
          <NavbarComponent  navbarToggle={navbarToggle}  onToggleNavbar={onToggleNavbar} />
           <NavbarMenuComponent  onToggleNavbar={onToggleNavbar} />
           
        </nav>
    
  )
}

export default NavigationComponent
