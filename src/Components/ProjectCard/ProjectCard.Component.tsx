import { Link } from "react-router-dom"
import { CARD_DATA } from "../../utils/project-card"

const ProjectCardComponent = () => {
  return (
    <div className="zone blue grid-wrapper">
        {
            CARD_DATA.map((item)=>{
                return(
                    <Link to={item.link} className="box zone" key={item.id}> 
                    <img src={item.image} alt={item.name}/>
                      <h3>{item.name}</h3>
                </Link> 
                )
            })
        }      
             </div>
  ) 
}

export default ProjectCardComponent