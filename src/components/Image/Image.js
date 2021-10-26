import React from 'react';

import testP1 from '../../assets/images/testP1.PNG';
import label from '../../assets/images/label.PNG';
import { render } from 'react-dom';

function Image({ currentPage }) {

    const renderLilNav = () => {
        
        if (currentPage === 'aboutus'){
            return (
                <div className="utop">
                    <p className="lilNavText">VALUES</p>
                    <p className="lilNavText">TEAM</p>
                    <p className="lilNavText">APPROACH</p>
                </div>
            )
        } else if (currentPage === 'developments'){
            return (
                <div className="utop">
                    <p className="lilNavText">DEVELOPMENTS</p>
                </div>
            )
        } else if (currentPage === 'property'){
            return (
                <div className="utop">
                    <p className="lilNavText">Projects</p>
                </div>
            )
        } else if (currentPage === 'contact'){
            return (
                <div className="utop">
                    <p className="lilNavText">contact</p>
                </div>
            )
        } else {
            return(
                <div></div>
            )
        }
    }

    return (
        <div className="stylingImageDiv">
            <div className="imageStyle">
                <div className="full setPos">
                    {renderLilNav()}
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