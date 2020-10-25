import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./CampusInfo.css";

const CampusInfo = () => {
    return (
        <>
            <div className="row m-5 py-5" style={{ color: "#002147" }}>
                <div className="col-md-6">
                    <h4 className="pl-2">Contact</h4>
                    <div className="col mt-3">
                        <div className="info row-md-2">
                            <LocationOnIcon /> ABC Road, Block-69, Masupisu, Uganda 01010101.
                        </div>
                        <div className="info row-md-2">
                            <PhoneIcon />
                            +000000000
                        </div>
                    </div>
                </div>
                <div className="col-md-6 map-container">
                    <h4>Campus Location</h4>
                    <div className="map text-center mt-3">
                        Google Map Here <br /> Institutins will use their own API in this case
                    </div>
                </div>
            </div>
        </>
    );
};

export default CampusInfo;
