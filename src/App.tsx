
import './App.css'
import NavigationComponent from './Components/Navigation/Navigation.Component'
import ContactPage from './Pages/ContactPage/ContactPage'
import FooterPage from './Pages/FooterPage/FooterPage.Component'
import HeroPage from './Pages/HeroPage/HeroPage'
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage.Component'
import SkillsPage from './Pages/SkillsPage/SkillsPage'

const  App=()=> {

  return (
    <>
    <NavigationComponent/>
    <HeroPage/>
    <SkillsPage/>
    <ProjectsPage/>/
    <ContactPage/>
    <FooterPage/>
    </>
  )
}

export default App
