import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
        original: "https://picsum.photos/id/1010/1000/600/",
        thumbnail: "https://picsum.photos/id/1010/250/150/",
    },
    {
        original: "https://picsum.photos/id/1011/1000/600/",
        thumbnail: "https://picsum.photos/id/1011/250/150/",
    },
    {
        original: "https://picsum.photos/id/1012/1000/600/",
        thumbnail: "https://picsum.photos/id/1012/250/150/",
    },
    {
        original: "https://picsum.photos/id/1013/1000/600/",
        thumbnail: "https://picsum.photos/id/1013/250/150/",
    },
    {
        original: "https://picsum.photos/id/1014/1000/600/",
        thumbnail: "https://picsum.photos/id/1014/250/150/",
    },
];

const PhotoGallery = () => {
    return (
        <>
            <h4 className="text-center" style={{ color: "#002147" }}>
                Photo Gallery
            </h4>
            <div className="m-5">
                <ImageGallery items={images} />
            </div>
        </>
    );
};

export default PhotoGallery;
