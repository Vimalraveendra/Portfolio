import { Link } from 'react-scroll';

import "./HeroPage.styles.css"

const HeroPage = () => {
  return (

<div  id="home"  className="zone hero-container">
  	 <div className="hero-section">
  	 	<img className="cover" src="/src/assets/myimage.jpg"/>
     </div>
  	 <div className="main">
  	 	<h1>Hi. I'm <strong>Vimal Kumar</strong>.</h1>
  	   <p>Welcome to my portfolio website</p>
  	   <h2><strong>Front End Developer</strong></h2>
          <Link to="projects" className="btn large">Find More</Link>
  	 </div>
  	
  </div>




  )
}

export default HeroPage