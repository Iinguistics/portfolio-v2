import React from 'react'

const Footer = () => {
    return (
        <div className="flex flex-row justify-around h-20 bg-gray-900 items-center text-white text-xl mt-20" >
            <a href="/" >
            <p>JG</p>
            </a>
            <a href="https://github.com/Iinguistics" target="_blank" rel="noopener noreferrer">
            <img src={require('../assets/icons/github-icon.png')} alt="github"/> 
            </a>
        </div>
    )
}

export default Footer
