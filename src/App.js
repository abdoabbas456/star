import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./styles/App.scss";
import Header from "./components/header";
import Banner from "./components/banner";
import Case from "./components/case";
function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    gsap.to("body", 0, { css: { visibility: "visible" } },[]);
    
  }, []);


  
    // prevents flashing
   
  return (
    <div className="App">
      <Header />
      <Banner />
      <Case />
    </div>
  );
}

export default App;
