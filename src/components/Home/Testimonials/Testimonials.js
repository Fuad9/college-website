import React from "react";
import "./testimonial.css";

const Testimonials = () => {
    return (
        <>
            <section className="row m-5 d-flex justify-content-center align-items-center testimonial-container text-center">
                <div className="col col-sm-10 col-md-4">
                    <div className="cards card1">
                        <h5>About Us</h5>
                    </div>
                    <div className="cards card2">
                        <h5>Mission</h5>
                    </div>
                </div>
                <div className="cards card3 col-sm-10 col-md-4 mt-3" style={{ height: "420px" }}>
                    <h5>
                        XYZ College
                        <br /> One of the oldest and renowned college in the country
                    </h5>
                </div>
                <div className="col col-sm-10 col-md-4">
                    <div className="cards card4">
                        <h5>Vission</h5>
                    </div>
                    <div className="cards card5">
                        <h5>Organogram</h5>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
