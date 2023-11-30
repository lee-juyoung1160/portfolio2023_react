import React from "react";
import Header from "../components/Header";
import Main from "../components/home/Main";
import Visual from "../components/home/Visual";
import About from "../components/home/About";
import Work from "../components/home/Work";
import Skill from "../components/home/Skill";
import Footer from "../components/Footer";
import Skip from "../components/home/Skip";


const HomeView = () => {
    return (
    <>
        <Skip />
        <Header />
        <Main>
            <Visual />
            <About />
            <Work />
            <Skill />
        </Main>
        <Footer />
    </>
    );
};

export default HomeView;