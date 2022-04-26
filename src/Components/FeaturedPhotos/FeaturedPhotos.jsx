import React from "react";
import "./FeaturedPhotos.css";
// Import all jpg from src/Assets/Photos
import photo1 from "../../Assets/Photos/1-min.jpg";
import photo2 from "../../Assets/Photos/2-min.jpg";
import photo3 from "../../Assets/Photos/3-min.jpg";
import photo4 from "../../Assets/Photos/4-min.jpg";
import photo5 from "../../Assets/Photos/5-min.jpg";
import photo6 from "../../Assets/Photos/6-min.jpg";
import photo7 from "../../Assets/Photos/7-min.jpg";
import photo8 from "../../Assets/Photos/8-min.jpg";
import photo9 from "../../Assets/Photos/9-min.jpg";
import photo10 from "../../Assets/Photos/10-min.jpg";
import photo11 from "../../Assets/Photos/11-min.jpg";
import photo12 from "../../Assets/Photos/12-min.jpg";
import photo13 from "../../Assets/Photos/13-min.jpg";
import photo14 from "../../Assets/Photos/14-min.jpg";
import photo15 from "../../Assets/Photos/15-min.jpg";
import photo16 from "../../Assets/Photos/16-min.jpg";
import photo17 from "../../Assets/Photos/17-min.jpg";
import photo18 from "../../Assets/Photos/18-min.jpg";
import photo19 from "../../Assets/Photos/19-min.jpg";
import photo20 from "../../Assets/Photos/20-min.jpg";
import photo21 from "../../Assets/Photos/21-min.jpg";

const FeaturedPhotos = () => {
    return (
        <div className="featuredPhotos">
            <h1>Shooting et Edit <span className="red">Photo</span></h1>
            <div className="photos-container">
                <div className="photo">
                    <img src={photo1} alt="photo1" />
                </div>
                <div className="photo">
                    <img src={photo2} alt="photo2" />
                </div>
                <div className="photo">
                    <img src={photo3} alt="photo3" />
                </div>
                <div className="photo">
                    <img src={photo4} alt="photo4" />
                </div>
                <div className="photo">
                    <img src={photo5} alt="photo5" />
                </div>
                <div className="photo">
                    <img src={photo6} alt="photo6" />
                </div>
                <div className="photo">
                    <img src={photo7} alt="photo7" />
                </div>
                <div className="photo">
                    <img src={photo8} alt="photo8" />
                </div>
                <div className="photo">
                    <img src={photo9} alt="photo9" />
                </div>
                <div className="photo">
                    <img src={photo10} alt="photo10" />
                </div>
                <div className="photo">
                    <img src={photo11} alt="photo11" />
                </div>
                <div className="photo">
                    <img src={photo12} alt="photo12" />
                </div>
                <div className="photo">
                    <img src={photo13} alt="photo13" />
                </div>
                <div className="photo">
                    <img src={photo14} alt="photo14" />
                </div>
                <div className="photo">
                    <img src={photo15} alt="photo15" />
                </div>
                <div className="photo">
                    <img src={photo16} alt="photo16" />
                </div>
                <div className="photo">
                    <img src={photo17} alt="photo17" />
                </div>
                <div className="photo">
                    <img src={photo18} alt="photo18" />
                </div>
                <div className="photo">
                    <img src={photo19} alt="photo19" />
                </div>
                <div className="photo">
                    <img src={photo20} alt="photo20" />
                </div>
                <div className="photo">
                    <img src={photo21} alt="photo21" />
                </div>
            </div>
        </div>
    )
}

export default FeaturedPhotos;