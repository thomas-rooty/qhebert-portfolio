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
                    <img className="photo" src={photo1} alt="photo1"/>
                    <img className="photo" src={photo2} alt="photo2"/>
                    <img className="photo" src={photo3} alt="photo3"/>
            </div>
            <div className="lower-container">
                <h2>Vidéaste - Photographe - Réalisateur</h2>
            </div>
        </div>
    )
}

export default FeaturedPhotos;