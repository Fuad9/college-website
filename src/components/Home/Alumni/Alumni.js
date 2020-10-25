import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import alumniData from "../../../fakeData/alumniData";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 7 },
];

const Alumni = () => {
    const [alumni] = useState(alumniData);

    return (
        <>
            <h4 style={{ color: "#002147" }} className="text-center">
                Notable Alumni
            </h4>
            <div className="carousel-container m-5">
                <Carousel breakPoints={breakPoints}>
                    {alumni.map((elem) => (
                        <div className="text-center my-4">
                            <img src={elem.image} alt="" />
                            <h6>{elem.name}</h6>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    );
};

export default Alumni;
