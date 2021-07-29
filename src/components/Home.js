import React from 'react'
import profilePic from  '../static/images/ProfilePic.png'
import '../static/Home.css'
import '../static/global.css'

const Home = () => {

    //pass in props?
    return (
        <div className="">
            <div className="grid grid-rows-1 py-24 px-5">
                <div className="grid grid-cols-6 gap-4 mt-10 py-12"> 
                    <div className="col-start-2 col-span-2 py-12">
                        <h1 className='Home-name-font global-font font-extrabold text-5xl leading-normal mt-0 flex justify-center'>Justin Zamora</h1>
                        <h3 className="Home-sub-font flex justify-center global-font text-lg font-medium">Software Engineer from Los Angeles</h3>

                    {/* Navigation buttons */}
                    <div className="m-1">
                        <div className="flex justify-center">
                            <button className="Home-btn-bg Home-font-color font-bold uppercase text-xs py-2 rounded-full mr-1 mb-1 transition-all duration-200" type="button">Home</button>
                        </div>
                        <div className="flex justify-center">
                            <button className="Home-btn-bg Home-font-color font-bold uppercase text-xs py-2 rounded-full mr-1 mb-1 transition-all duration-200" type="button">About</button>
                        </div>
                        <div className="flex justify-center">
                            <button className="Home-btn-bg Home-font-color font-bold uppercase text-xs py-2 rounded-full  mr-1 mb-1 transition-all duration-200" type="button">Projects</button>
                        </div>
                        <div className="flex justify-center">
                            <button className="Home-btn-bg Home-font-color font-bold uppercase text-xs py-2 rounded-full  mr-1 mb-1 transition-all duration-200" type="button">Skills</button>
                        </div>
                        <div className="flex justify-center">
                            <button className="Home-btn-bg Home-font-color font-bold uppercase text-xs py-2 rounded-full  mr-1 mb-1 transition-all duration-200" type="button">Contact</button>
                        </div>
                    </div>
                </div>

                    <div className="col-span-2 col-end-6 py-6">
                        <img className="rounded-full" src={profilePic} alt="profilePic.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home