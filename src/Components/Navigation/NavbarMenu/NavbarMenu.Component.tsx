import { GiHamburgerMenu } from "react-icons/gi";

import "./NavbarMenu.styles.css"


const NavbarMenuComponent = () => {
  return (
    <div className="navbar-menu-container">
       <button className="navbar-btn" >
       <GiHamburgerMenu />
       </button>
    </div>
  )
}

export default NavbarMenuComponent