import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import NotFound from './NotFound'

const Routes = () => {
    return (
        <>
        <Switch>
            <Route path to="/skills">
                <Skills/>
            </Route>

            <Route path to="/projects">
                <Projects/>
            </Route>

            <Route path to="/contact">
                <Contact/>
            </Route>

            <Route path to="/">
                <Home/>
            </Route>

            {/* test this out on scroll as well */}
            <Route> 
                <NotFound/>
            </Route>
        </Switch>
        </>  
    )
}

export default Routes