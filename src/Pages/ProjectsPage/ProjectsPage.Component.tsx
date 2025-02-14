
import ProjectCardComponent from "../../Components/ProjectCard/ProjectCard.Component"
import "./ProjectsPage.styles.css"

const ProjectsPage = () => {
  return (
    <div id="projects">
    <div className="project">

    <header>
        <h2>Recent Projects</h2>
        <h3>Here's some stuff I made recently</h3>
    </header>
      <ProjectCardComponent/>
    </div>
    </div>
  )
}

export default ProjectsPage