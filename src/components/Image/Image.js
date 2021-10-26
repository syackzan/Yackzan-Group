import React, { useRef } from 'react';

import testP1 from '../../assets/images/testP1.PNG';
import label from '../../assets/images/label.PNG';
import Scroll from 'react-scroll';


function Image({ currentPage, executeScroll }) {


    const renderLilNav = () => {
        
        if (currentPage === 'aboutus'){
            return (
                <div className="utop">
                    <a href="#values" className="noStyle lilNavText">VALUES</a>
                    <a href="#team" className="noStyle lilNavText">TEAM</a>
                    <a href="#approach" className="noStyle lilNavText">APPROACH</a>
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