import React, { useState } from "react";
import "./PrimaryDesk.css";

const PrimaryDesk = () => {
    const [stop, setStop] = useState(false);

    const handleStop = () => {
        setStop(true);
    };

    const handleStart = () => {
        setStop(false);
    };

    return (
        <>
            <div className="row m-5">
                <div className="col-md-6">
                    <h4>Principal's Desk</h4>
                    <img src="https://randomuser.me/api/portraits/men/59.jpg" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores quia, voluptas inventore fugiat commodi nobis cumque unde, magnam, aliquid eligendi. Architecto,
                        provident ex nobis saepe dolor harum, illum eligendi fuga neque labore vel voluptas at assumenda nihil iste non!
                    </p>
                    <a href="/" className="text-danger text-decoration-none">
                        Read More....
                    </a>
                </div>
                <div className="col-md-6">
                    <h4>Latest News</h4>
                    <div className="marquee-container">
                        <marquee style={{ height: "500px" }} scrollAmount="3" scrollDelay="5" direction="up" onMouseOver={handleStop} onMouseOut={handleStart}>
                            <a href="#" className="text-white text-decoration-none">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, hic.</p>
                            </a>
                            <a href="#" className="text-white text-decoration-none">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, hic.</p>
                            </a>
                            <a href="#" className="text-white text-decoration-none">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, hic.</p>
                            </a>
                            <a href="#" className="text-white text-decoration-none">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, hic.</p>
                            </a>
                            <a href="#" className="text-white text-decoration-none">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, hic.</p>
                            </a>
                        </marquee>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrimaryDesk;
