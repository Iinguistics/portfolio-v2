import React, { useEffect, useState } from 'react'

const Planet = ({ match }) => {
    const [planet, setPlanet] = useState(match.params.id);
    
    useEffect(()=>{
    console.log(planet);
    }, [])

    return (
        <div>
            {planet}
        </div>
    )
}

export default Planet
