import { motion } from "framer-motion";
import { IIconInfoProps } from "../../../Model/Portfolio.model";



const IconInfoComponent:React.FC<IIconInfoProps> = ({Icon,text,link}) => {
  return (
     <motion.span className="social-icons-container" whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2,ease: "easeInOut" }
                    }}>
            <Icon/>
            {
              text==='Github'|| text==='Website' ?(
                <a href={link} target="_blank">
                   <span className="text">{text}</span>
                </a>
              ):(
               <span className="text">{text}</span>
              )
            }
            
          </motion.span>
  )
}

export default IconInfoComponent