import React from 'react'
import {Link} from 'react-router-dom'
import GitHub from '../static/images/links/GitHubLogo.png'
import LinkedIn from '../static/images/links/LinkedInLogo.png'
import Instagram from '../static/images/links/InstagramLogo.png'

const Contact = () => {
    return (
        <div className="grid grid-rows-2 mt-20 flex justify-center p-20"  style={{backgroundColor: 'white'}}>
            <h1 className="global-font-sub-title text-7xl italic font-semibold flex justify-center">Contact Me</h1>
            <hr className="m-3"/>
            <div className="grid grid-cols-3">
                <div className="col-start-2">
                    <div className="text-gray-300 flex justify-center">
                        <p>Los Angeles, CA</p>
                    </div>
                    <div>
                        <a className="hover:underline global-font-family" href = "mailto: justincodes@gmail.com">justincodes@gmail.com</a>
                    </div>
                </div>
                <div className="col-start-1 mt-5 flex justify-end">
                    <Link className="hover:shadow-xl rounded-2xl" to={{pathname:"https://github.com/JustinsHub"}} target="_blank">
                        <img className=" w-8 h-8 m-1" src={GitHub} alt="GitHub Logo"/>
                    </Link>
                </div>

                <div className="col-start-2 mt-5 flex justify-center">
                    <Link className="hover:shadow-xl rounded-lg" to={{pathname:"https://www.linkedin.com/in/justincodes/"}} target="_blank">
                        <img className="w-8 h-8 m-1" src={LinkedIn} alt="LinkedIn Logo"/>
                    </Link>
                </div>

                <div className="col-start-3 mt-5 flex justify-start">
                    <Link className="hover:shadow-xl rounded-2xl" to={{pathname:"https://www.instagram.com/justinshabits"}} target="_blank">
                        <img className="w-8 h-8 m-1" src={Instagram} alt="Instagram Logo"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact