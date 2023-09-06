import React from "react";

import Main from "./Main";
import Header from "./Header";

import BuildYourTeam from "./BuildYourTeam";
import { Route, Routes, Switch } from "react-router-dom";

const App = () => {
    return (
        <>
      
            <Header/>
            <Routes>
                
                    <Route path="/" element={<Main/>}/>
                    <Route path="/BuildYourTeam" element={<BuildYourTeam/>}/>
            </Routes>
            
        </>
    );
}

export default App;