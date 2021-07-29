import React, {useRef} from 'react'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Routes from './components/Routes'
import backgroundImage from './static/images/skyBackground2.jpeg'


function App() {
    const myAbout = useRef(null)
    const mySkills = useRef(null)
    const myProjects = useRef(null)
    const myContact = useRef(null)
    
    const scrollAbout = () => myAbout.current.scrollIntoView() 
    const scrollSkills = () => mySkills.current.scrollIntoView() 
    const scrollProjects = () => myProjects.current.scrollIntoView() 
    const scrollContact = () => myContact.current.scrollIntoView() 

return (
        <main className="bg-cover bg-scroll" style={{backgroundImage: `url(${backgroundImage})`}}>
            <section>
                <Home/>
            </section>

            <section>
                <About/>
            </section>

            <section>
                <Projects/>
            </section>

            <section>
                <Skills/>
            </section>

            <section> 
                <Contact/>
            </section>

            <Routes/>
        </main>
  );
}

export default App;
