import React from 'react';
import "./App.css";
import Header from "./Components/Header/Header";
import FeaturedVideos from "./Components/FeaturedVideos/FeaturedVideos";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <FeaturedVideos/>
        </div>
    );
};

export default App;