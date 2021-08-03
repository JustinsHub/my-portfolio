import React from 'react'
import JavascriptLogo from '../static/images/skills/JavascriptLogo.png'
import PythonLogo from '../static/images/skills/PythonLogo.png'
import HtmlLogo from '../static/images/skills/HtmlLogo.png'
import CssLogo from '../static/images/skills/CssLogo.png'
import ReactLogo from '../static/images/skills/ReactLogo.png'
import NodeLogo from '../static/images/skills/NodeJsLogo.png'
import PostgresLogo from '../static/images/skills/PostgresLogo.png'
import GitLogo from '../static/images/skills/GitLogo.png'



const Skills = () => {
    return (
        //when scrolling fade in skills/pics and have a mouseover modal/mini story behind it
        <div className="grid grid-rows-1 gap-4 px-24 py-10" style={{backgroundColor: 'white', marginTop: '9rem'}}>
            <h1 className="global-font-sub-title text-7xl italic font-semibold flex justify-center mt-5">Skills</h1>
            <hr className="m-3"/>
            <div className="grid grid-cols-12 gap-4">    
                <div className="col-start-3 col-span-2 flex justify-center">
                    <img className="lg:h-44 lg:w-44" src={JavascriptLogo} alt="Javascript Logo"/>
                </div>
                <div className="col-start-5 col-span-2">
                    <img src={ReactLogo} alt="Javascript Logo"/>
                </div>
                <div className="col-start-7 col-span-2">
                    <img src={NodeLogo} alt="Javascript Logo"/>
                </div>
                <div className="col-start-9 col-span-2">
                    <img className="lg:h-44 lg:w-44" src={PythonLogo} alt="Javascript Logo"/>
                </div>
                <div className="col-start-3 col-span-2">
                    <img src={HtmlLogo} alt="Javascript Logo"/>
                </div>
                <div className="col-start-5 col-span-2 flex justify-center">
                    <img className="lg:h-48" src={CssLogo} alt="Javascript Logo"/>
                </div>
                <div className="col-start-7 col-span-2">
                    <img src={PostgresLogo} alt="Javascript Logo"/>
                </div>
                <div className="col-start-9 col-span-2">
                    <img src={GitLogo} alt="Javascript Logo"/>
                </div>
            </div>
        </div>
    )
}

export default Skills