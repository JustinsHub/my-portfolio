import React, {useState} from 'react'
import '../static/Home.css'
import '../static/global.css'

const Home = ({about, projects, skills, contact}) => {
    const [isActive, setIsActive] = useState(true)

    const navigateAbout = () => {
        about()
        setIsActive(false)
    }
    const navigateProjects = () => {
        projects()
        setIsActive(false)
    }
    const navigateSkills = () => {
        skills()
        setIsActive(false)
    }
    const navigateContact = () => {
        contact()
        setIsActive(false)
    }
    
    return (
        <div className="">
            <div className="grid grid-rows-1 py-24 px-5">
                <div className="grid grid-cols-6 gap-4 mt-10 py-12"> 
                    <div className="col-start-3 col-span-2 py-12">
                        <h1 className='Home-name-font-color font-extrabold text-6xl leading-normal mt-0 flex justify-center'>Justin Zamora</h1>
                        <h3 className="Home-sub-font-color flex justify-center global-font text-lg font-semibold">Software Engineer from Los Angeles</h3>

                    {/* Navigation buttons */}
                        <div className="m-1">
                            <div className="flex justify-center">
                                <button className={isActive ? "Home-font-home-btn font-bold uppercase text-xs py-1 rounded-full mr-1 transition-all duration-200" : "Home-font-color font-bold uppercase text-xs py-1 rounded-full mr-1 transition-all duration-200"} type="button" >Home</button>
                            </div>
                            <div className="flex justify-center">
                                <button className="Home-btn-bg Home-font-color font-bold uppercase text-xs py-1 rounded-full mr-1 transition-all duration-200" type="button" onClick={navigateAbout}>About</button>
                            </div>
                            <div className="flex justify-center">
                                <button className="Home-btn-bg Home-font-color font-bold uppercase text-xs py-1 rounded-full  mr-1 transition-all duration-200" type="button" onClick={navigateProjects}>Projects</button>
                            </div>
                            <div className="flex justify-center">
                                <button className="Home-btn-bg Home-font-color font-bold uppercase text-xs py-1 rounded-full  mr-1 transition-all duration-200" type="button" onClick={navigateSkills}>Skills</button>
                            </div>
                            <div className="flex justify-center">
                                <button className="Home-btn-bg Home-font-color font-bold uppercase text-xs py-1 rounded-full  mr-1 transition-all duration-200" type="button" onClick={navigateContact}>Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home