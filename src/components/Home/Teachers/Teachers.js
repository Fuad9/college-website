import React, { useState } from "react";
import teachers from "../../../fakeData/teachersData";

const Teachers = () => {
    const [teachersInfo] = useState(teachers);

    return (
        <>
            <div className="row m-5">
                {teachersInfo.map((elem) => (
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 my-4">
                        <img src={elem.image} style={{ borderRadius: "50%" }} alt="" />
                        <h5>{elem.name}</h5>
                        <h6>{elem.designation}</h6>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Teachers;
