
import { motion } from "framer-motion";
import { SKILLS } from "../../utils/skills-data";
import "./Skills.styles.css"

const SkillsComponent = () => {
  return (
   
         <div className="skills-container">
         {
            SKILLS. map((skill)=>{
                return(
                  <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2,ease: "easeInOut",type:'spring',bounce:0.25 }
                  }}
                  key={skill.id}
                >
                        <div   className="skill-container">
                             <div className="icon-container">{<skill.icon/>}</div>
                             <p>{skill.name}</p>               
                    </div>
        </motion.div>
                )
            })
         }
           </div>
  )
}

export default SkillsComponent