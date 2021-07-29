import React from 'react'
import profilePic from  '../static/ProfilePic.png'

const Home = () => {

    //pass in props?
    return (
        <div className="">
            <div className="grid grid-rows-2 ">
            <div className="grid grid-cols-6 gap-4 row-start-2"> 
                <div className="col-start-2 col-span-2">
                    <h1 className='text-4xl font-normal leading-normal mt-0 mb-2 flex justify-center'>Justin Zamora</h1>
                    <h3 className="flex justify-center">Software Engineer from Los Angeles</h3>
                    <div className="flex justify-center">
                        <button className="bg-lightBlue-100 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">About</button>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-lightBlue-100 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Projects</button>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-lightBlue-100 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Skills</button>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-lightBlue-100 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Contact</button>
                    </div>
                </div>
                    <div className="col-span-2 col-end-6">
                        <img className="rounded-full" src={profilePic} alt="profilePic.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home