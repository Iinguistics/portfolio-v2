import React from 'react'

const Footer = () => {
    return (
        <div className="flex flex-row justify-center md:justify-around h-20 bg-gray-900 items-center text-xl mt-20 font-extrabold">
            <a href="/" className="invisible lg:visible">
            <span className="text-white">J</span><span className="text-red-600">G</span>
            </a>
            <a className="visible lg:invisible mr-10" href="https://www.linkedin.com/in/JamesGoytia" target="_blank" rel="noopener noreferrer">
            <img id="linkedin-icon-footer" src={require('../assets/icons/linkedin-icon.png')} alt="linkedin"/> 
            </a>
            <a href="https://github.com/Iinguistics" target="_blank" rel="noopener noreferrer">
            <img src={require('../assets/icons/github-icon.png')} alt="github"/> 
            </a>
        </div>
    )
}

export default Footer
