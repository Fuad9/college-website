import React from "react";
import "./HeaderMain.css";
import video from "../../../images/videos/video.mp4";

const HeaderMain = () => {
    return (
        <>
            <header className="v-header container">
                <div className="fullscreen-video-wrap embed-responsive">
                    <video className="embed-responsive-item" autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className="header-overlay"></div>
                <div className="header-content">
                    <h1 className="text-warning">
                        Learning Today
                        <br />
                        Leading Tomorrow
                    </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi ullam aperiam!</p>
                </div>
            </header>

            <section>
                <div className="container section-b">
                    <h3 className="text-center">Empowering Education Through Innovation</h3>
                </div>
            </section>
        </>
    );
};

export default HeaderMain;
