import React from "react";
import "./FeaturedVideos.css";

const FeaturedVideos = () => {
    return (
        <div className="featuredVideos">
            <h1>Tournage et montage vidéo</h1>
            <div className="videos-container">
                <iframe className="video"
                        src="https://www.youtube.com/embed/GlSPrGCG4MM">
                </iframe>
                <iframe className="video"
                        src="https://www.youtube.com/embed/_HNnBWBFyAE">
                </iframe>
            </div>
        </div>
    )
}

export default FeaturedVideos;