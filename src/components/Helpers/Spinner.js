import React from 'react'

const Spinner = () => {
    return (
        <div className="m-auto max-w-xs container">
        <div class="inline-block animate-spin ease duration-300 w-5 h-5 bg-black mx-2"></div>
        <div class="inline-block animate-spin ease duration-300 w-5 h-5 bg-black mx-2"></div>
        <div class="inline-block animate-spin ease duration-300 w-5 h-5 bg-black mx-2"></div>
        <div class="inline-block animate-spin ease duration-300 w-5 h-5 bg-black mx-2"></div>
        <div class="inline-block animate-spin ease duration-300 w-5 h-5 bg-black mx-2"></div>
        Loading...
        </div>
       
    )
}

export default Spinner
