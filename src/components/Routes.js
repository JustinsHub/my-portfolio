import React from 'react'
import {Switch, Route} from 'react-router-dom'
import NotFound from './NotFound'

const Routes = () => {
    return (
        <>
        <Switch>
            {/* <Route path="/skills">
                <Skills/>
            </Route>

            <Route path="/projects">
                <Projects/>
            </Route>

            <Route path="/contact">
                <Contact/>
            </Route>

            <Route path="/">
                <Home/>
            </Route> */}

            {/* test this out on scroll as well */}
            <Route> 
                <NotFound/>
            </Route>
        </Switch>
        </>  
    )
}

export default Routes