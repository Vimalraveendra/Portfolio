
import { Link } from 'react-scroll';
import { NAV_DATA } from '../../../utils/nav-data';


const NavBarComponent= () => {
  return (
       <ul className={`nav-container `}>
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
                          >{data.name}</Link>
                        )
                      }
                      </li>
                    )
                    
                }
                </ul>
          
          

  )
}

export default NavBarComponent