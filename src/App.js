import React from "react";
import Header from "./Header";
import "./App.css";
import Container from "./Container";

const App = () => {
    return(
        <>  
            <div className = "homepage" >
            <Header/>
            <Container/>
            </div>
        </>
    );
}

export default App;