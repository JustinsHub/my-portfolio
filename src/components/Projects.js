import React from 'react'
import {Link} from 'react-router-dom'
import pickoutPage from '../static/images/PickoutPage.png'
import YBYB from '../static/images/YBYBPage.png'

const Projects = () => {
    return (
        <div className="grid grid-rows-1 gap-4" style={{marginTop: '9rem'}}>
            <div className="grid grid-cols-1 gap-4">
            <div className="rounded overflow-hidden p-20 py-10" style={{backgroundColor: 'white'}}>
                <h1 className="global-font-sub-title text-7xl italic font-semibold flex justify-center mt-5">Projects
                </h1>
                <hr className="m-5"/>
                <div className="flex justify-evenly"> 
                    <div className="p-10">  
                    <Link to={{pathname:"https://github.com/JustinsHub/Pickout"}} target="_blank">
                        <div className="max-w-sm rounded overflow-hidden shadow-xl hover:shadow-2xl duration-200">
                            <img className="w-full" src={pickoutPage} alt="Pickout Service card"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Pickout</div>
                                <p className="text-gray-700 text-base">
                                Pickout is a full stack web app built using React, NodeJS, Express, and PostgreSQL. The web apps goal is to have users who are indecisive of what foods to eat when users have assumed of every single possiblity.
                                </p>
                            </div>
                        </div>
                    </Link>
                    </div>

                    <div>
                        <div className="p-10">  
                        <Link to={{pathname:"https://github.com/JustinsHub/YouBreakYouBuy"}} target="_blank">
                            <div className="max-w-sm rounded overflow-hidden shadow-xl hover:shadow-2xl duration-200">
                                <img className="w-full" src={YBYB} alt="YouBreakYouBuy card"/>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">YouBreakYouBuy</div>
                                    <p className="text-gray-700 text-base">
                                        YouBreakYouBuy is a backend based web app built with just Python, Flask, and PostgreSQL. This was the first big project I have built. The main focus was to practice building an e-commerce based app.
                                    </p>
                                </div>
                            </div>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Projects