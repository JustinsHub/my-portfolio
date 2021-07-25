import React, {useRef} from 'react'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

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
        <main>
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
        </main>
  );
}

export default App;
