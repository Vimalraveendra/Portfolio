import { GiHamburgerMenu } from "react-icons/gi";

import "./NavbarMenu.styles.css"
import { INavbarMenuProps } from "../../../Model/Portfolio.model";

const NavbarMenuComponent:React.FC<INavbarMenuProps> = ({onToggleNavbar}) => {
  return (
    <div className="navbar-menu-container">
       <button className="navbar-btn" onClick={onToggleNavbar}>
       <GiHamburgerMenu />
       </button>
    </div>
  )
}

export default NavbarMenuComponent