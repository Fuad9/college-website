import React, { useState } from "react";
import "./Facilities.css";
import facilitiesData from "../../../fakeData/facilities";

const Facilities = () => {
    const [facilities] = useState(facilitiesData);

    return (
        <>
            <h3 className="text-center" style={{ color: "#002147" }}>
                Our Facilities
            </h3>
            <div className="row m-4 facilities-container">
                <div className="col-sm-6 col-md-4 col-lg-2">
                    <a href="#" className="text-decoration-none">
                        <h6 style={{ backgroundColor: "#002147", color: "#fff" }}>All</h6>
                    </a>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                    <a href="#" className="text-decoration-none">
                        <h6>CAMPUS REGIONS</h6>
                    </a>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                    <a href="#" className="text-decoration-none">
                        <h6>HEALTH CENTRE</h6>
                    </a>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                    <a href="#" className="text-decoration-none">
                        <h6>HOSTELS</h6>
                    </a>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                    <a href="#" className="text-decoration-none">
                        <h6>LIBRARY</h6>
                    </a>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                    <a href="#" className="text-decoration-none">
                        <h6>SPORT COMPLEX</h6>
                    </a>
                </div>
            </div>
            <div className="m-5">
                <div className="row card-container">
                    {facilities.map((facility) => (
                        <div className="card col-sm-6 col-md-4 col-lg-3">
                            <div className="card-img">
                                <img src={facility.image} alt="" />
                            </div>
                            <a href="#" className="text-decoration-none">
                                <h5>{facility.name}</h5>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Facilities;
