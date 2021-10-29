import React, {useRef} from 'react';

import { Element } from 'react-scroll';

function AboutUs ({ values }) {
    return (
        <>
        <div className="fullVP d-flex justify-content-center align-items-center" id='values'>Values</div>
        <div className="fullVP d-flex justify-content-center align-items-center" id="team">Team</div>
        <div className="fullVP d-flex justify-content-center align-items-center" id="approach">Approach</div>
        </>
        
    )
}

export default AboutUs;