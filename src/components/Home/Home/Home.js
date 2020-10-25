import React from "react";
import Administrators from "../Administrators/Administrators";
import Alumni from "../Alumni/Alumni";
import Facilities from "../Facilities/Facilities";
import CampusInfo from "../CampusInfo/CampusInfo";
import Header from "../Header/Header";
import NewsDesk from "../NewsDesk/NewsDesk";
import NoticeDesk from "../NoticeDesk/NoticeDesk";
import PrimaryDesk from "../PrimaryDesk/PrimaryDesk";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Teachers from "../Teachers/Teachers";

const Home = () => {
    return (
        <>
            <main>
                <Header />
                <Testimonials />
                <PrimaryDesk />
                <NewsDesk />
                <NoticeDesk />
                <Facilities />
                <Alumni />
                <Administrators />
                <Teachers />
                <PhotoGallery />
                <CampusInfo />
                <Footer />
            </main>
        </>
    );
};

export default Home;
