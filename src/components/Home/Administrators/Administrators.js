import React from "react";
import "./Administrators.css";

const Administrators = () => {
    return (
        <>
            <div className="m-5">
                <div className="administrator-text">
                    <h4 className="text-center">Administrators of the College</h4>
                </div>
                <div className="administrator-body">
                    <div className="row my-4 administrator-body-one">
                        <div className="col-md-4">
                            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="" />
                        </div>
                        <div className="col-md-8">
                            <h3 className="text-warning">Dr. John Doe</h3>
                            <h4>Hon’ble Chairman, Governor's body</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi atque quisquam ipsum cum iusto facere illum voluptatem quo ab, itaque esse, repudiandae, blanditiis
                                omnis sequi corrupti? Magnam pariatur quasi dicta!{" "}
                                <a href="#">
                                    <small className="text-danger">Read More...</small>
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="row my-4 administrator-body-two">
                        <div className="col-md-4">
                            <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="" />
                        </div>
                        <div className="col-md-8">
                            <h3 className="text-warning">Dr. John Doe</h3>
                            <h4>Hon’ble Principal</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi atque quisquam ipsum cum iusto facere illum voluptatem quo ab, itaque esse, repudiandae, blanditiis
                                omnis sequi corrupti? Magnam pariatur quasi dicta!{" "}
                                <a href="#">
                                    <small className="text-danger">Read More...</small>
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="row my-4 administrator-body-three">
                        <div className="col-md-4">
                            <img src="https://randomuser.me/api/portraits/men/77.jpg" alt="" />
                        </div>
                        <div className="col-md-8">
                            <h3 className="text-warning">Dr. John Doe</h3>
                            <h4>Hon’ble Vice Principal</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi atque quisquam ipsum cum iusto facere illum voluptatem quo ab, itaque esse, repudiandae, blanditiis
                                omnis sequi corrupti? Magnam pariatur quasi dicta!{" "}
                                <a href="#">
                                    <small className="text-danger">Read More...</small>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Administrators;
