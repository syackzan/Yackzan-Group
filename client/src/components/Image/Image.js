import React from 'react';

import testP1 from '../../assets/images/testP1.PNG';
import label from '../../assets/images/label.PNG';

function Image() {
    return (
        <div className="stylingImageDiv">
            <div className="imageStyle">
                <div className="full setPos">
                    <div className="utop">
                        <p className="lilNavText">VALUES</p>
                        <p className="lilNavText">TEAM</p>
                        <p className="lilNavText">APPROACH</p>
                    </div>
                    <img className="full" src={testP1} alt="#"></img>
                    <div className="utop2 d-flex justify-content-center">
                        <div className="box">
                           class
                        </div>
                    </div>
                </div>
            </div>
            <div className="labelStyle">
                <img className="half" src={label} alt="#" />
            </div>
        </div>
    )
}

export default Image;