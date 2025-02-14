
import './App.css'
import NavigationComponent from './Components/Navigation/Navigation.Component'
import ContactPage from './Pages/ContactPage/ContactPage'
import HeroPage from './Pages/HeroPage/HeroPage'
import SkillsPage from './Pages/SkillsPage/SkillsPage'

const  App=()=> {

  return (
    <>
    <NavigationComponent/>
    <HeroPage/>
    <SkillsPage/>
    <ContactPage/>
    </>
  )
}

export default App
