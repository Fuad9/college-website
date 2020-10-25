import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <h4 className="text-center" style={{ color: "#002147" }}>
                Useful Links
            </h4>
            <div className="row m-5 footer-container">
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <ul>
                        <li>
                            <a href="#">>> Link1</a>
                        </li>
                        <li>
                            <a href="#">>> Link2</a>
                        </li>
                        <li>
                            <a href="#">>> Link3</a>
                        </li>
                        <li>
                            <a href="#">>> Link4</a>
                        </li>
                        <li>
                            <a href="#">>> Link5</a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <ul>
                        <li>
                            <a href="#">>> Link6</a>
                        </li>
                        <li>
                            <a href="#">>> Link7</a>
                        </li>
                        <li>
                            <a href="#">>> Link8</a>
                        </li>
                        <li>
                            <a href="#">>> Link9</a>
                        </li>
                        <li>
                            <a href="#">>> Link10</a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <ul>
                        <li>
                            <a href="#">>> Link11</a>
                        </li>
                        <li>
                            <a href="#">>> Link12</a>
                        </li>
                        <li>
                            <a href="#">>> Link13</a>
                        </li>
                        <li>
                            <a href="#">>> Link14</a>
                        </li>
                        <li>
                            <a href="#">>> Link15</a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <ul>
                        <li>
                            <a href="#">>> Link16</a>
                        </li>
                        <li>
                            <a href="#">>> Link17</a>
                        </li>
                        <li>
                            <a href="#">>> Link18</a>
                        </li>
                        <li>
                            <a href="#">>> Link19</a>
                        </li>
                        <li>
                            <a href="#">>> Link20</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Footer;
