import React from 'react';
import "./App.css";
import Header from "./Components/Header/Header";
import FeaturedVideos from "./Components/FeaturedVideos/FeaturedVideos";
import FeaturedPhotos from "./Components/FeaturedPhotos/FeaturedPhotos";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <FeaturedVideos/>
            <FeaturedPhotos/>
        </div>
    );
};

export default App;