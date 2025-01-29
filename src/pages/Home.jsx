import { useState, useEffect } from "react";


const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "https://t10pgalleryv2.azureedge.net/galleryv2images/01a96f49-3da5-4524-87ba-b683240528d4/1ac993a1-2ba0-4ce9-b75b-1f076a57e893/2",
        "https://t10pgalleryv2.azureedge.net/galleryv2images/01a96f49-3da5-4524-87ba-b683240528d4/41670954-234f-4ed2-9cc4-39b3b2345029/2",
        "https://t10pgalleryv2.azureedge.net/galleryv2images/01a96f49-3da5-4524-87ba-b683240528d4/fbaf7fd9-649a-4066-b688-f3e3a4bad358/2",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <div className="hero-img-cont">
                <div className="hero-img-main">
                    <h1>Welcome, Driver</h1>
                    <p className="hero-img-txt">Bringing the World’s Most Advanced Vehicles to Discerning Drivers Who Demand Power, Style, and Reliability.</p>
                </div>
                <img src="https://t10pgalleryv2.azureedge.net/galleryv2images/01a96f49-3da5-4524-87ba-b683240528d4/6f92f680-5ac0-4e91-b985-8e30c13ab0c2/2" alt="Ford Mustang"></img>
            </div>
            <section className="gallery-section">
                <div className="gallery-cont">
                    {images.map((image, index) => (
                        <img key={index} src={image}
                            alt={`Gallery image ${index + 1}`}
                            className={`gallery-img ${
                            index === currentImageIndex ? "active" : ""
                            }`}
                        />
                    ))}
                </div>
                <div className="gallery-txt">
                    <h1>Why us?</h1>
                    <p>At Torque Imports, we believe that the thrill of driving should be within reach for everyone. Our lineup features a range of models, each engineered for agility, speed, and style, ensuring that every journey is an exhilarating adventure.</p>
                </div>
            </section>

        </>
    )
}

export default Home