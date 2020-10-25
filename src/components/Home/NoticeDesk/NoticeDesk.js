import React from "react";
import "./NoticeDesk.css";

const NoticeDesk = () => {
    return (
        <>
            <div className="row bg-secondary notice-container m-5">
                <div className=" col-md-6">
                    <h4>Important Announcements</h4>
                    <marquee style={{ height: "500px" }} scrollAmount="3" scrollDelay="5" direction="up">
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
                    <a href="#" className="text-danger text-decoration-none">
                        See All...
                    </a>
                </div>
                <div className=" col-md-6">
                    <h4>Upcoming Events</h4>
                    <marquee style={{ height: "500px" }} scrollAmount="3" scrollDelay="5" direction="up">
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
                    <a href="#" className="text-danger text-decoration-none">
                        See All...
                    </a>
                </div>
            </div>
        </>
    );
};

export default NoticeDesk;
