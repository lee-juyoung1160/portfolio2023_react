import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Visual from "../components/Visual";
import About from "../components/About";
import Work from "../components/Work";
import Skill from "../components/Skill";
import Footer from "../components/Footer";
import Skip from "../components/Skip";


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