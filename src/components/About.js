import React from 'react'
import profilePic from '../static/images/ProfilePic.png'

const About = () => {
    return (
        <div className="" style={{backgroundColor: 'white'}}>
            <div className="grid grid-rows-1 gap-4 py-24">
                <div className="grid grid-cols-4 gap-4 py-24">
                    <div className="col-start-2">
                        <h1 className="global-font-sub-title text-7xl italic font-semibold flex justify-center">Hello</h1>
                        <p className="global-font-family global-font-size leading-relaxed mt-3">
                            I'm Justin and I started as a self-taught developer and transitioned to Springboard’s Software Engineering Bootcamp to 
                            focus on building robust skill sets. I have put my full efforts to software engineering in order to gain 
                            the skills necessary to compete within this field and be a valuable addition to the company that sees my 
                            drive and determination. I’m am here for growth and to make an impact.
                        </p>
                    </div>
                    <div className="col-span-1 col-end-4">
                        <img className="rounded-full" src={profilePic} alt="ProfilePic.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About