import React from "react"
import NavBar from "./Navbar";
import HeroSection from "./HeroSection";
import AppSection from "./AppSection";
import CardSection from "./CardSection";
import FooterSection from "./FooterSection";


const App = () => {
    return(
        <div>           
            <NavBar/>
            <HeroSection/>
            <AppSection/> 
            <CardSection/>  
            <FooterSection/>
        </div>
    );
};

export default App;