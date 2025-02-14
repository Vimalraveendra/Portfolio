
import { Link } from 'react-scroll';
import { NAV_DATA } from '../../../utils/nav-data';
import { INavbarProps } from '../../../Model/Portfolio.model';



const NavbarComponent:React.FC<INavbarProps> = ({navbarToggle, onToggleNavbar }) => {
  return (
       <ul className={`nav-container ${navbarToggle? "display" : ""}`}>
                {
                    NAV_DATA.map((data)=><li key={data.id} className={`${data.link==='contact'?"last":""}`}>
                      {
                        data.name==='Resume'?(
                          <a href={data.link} target="_blank"  rel="noreferrer">{data.name}</a>
                        ):(
                          <Link  to={data.link}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onClick={onToggleNavbar}
                          >{data.name}</Link>
                        )
                      }
                      </li>
                    )
                    
                }
                </ul>
  )
}

export default NavbarComponent