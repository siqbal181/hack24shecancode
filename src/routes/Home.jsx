import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import "../App.css";
import banner from '../assets/banner.jpg'


const Home = () => {

  return (
    <>
    <Header />
    <main>
        <div className="container">
            <h1 className="header-home">
              Welcome to DreamNI
            </h1>
            <img src={banner} alt="banner" width={650}/>
            
        </div>
        </main>
    <Footer />
    </>
    )
}

export default Home;
