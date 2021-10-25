import React from 'react';

import testP1 from '../../assets/images/testP1.PNG';
import label from '../../assets/images/label.PNG';

function Image (){
    return(
        <div className="stylingImageDiv">
            <div className="imageStyle">
                <img className="full" src={testP1} alt="#" />
                <div className="utop">
                    <p className="lilNavText" >Values</p>
                    <p className="lilNavText" >Team</p>
                    <p className="lilNavText" >Approach</p>
                </div>
            </div>
            <div className="labelStyle">
                <img className="half" src={label} alt="#" />
            </div>
        </div>
    )
}

export default Image;