import React from "react";
import Navbar from "../components/LandingPage/Navbar";
import MainBanner from "../components/LandingPage/MainBanner";
import About from "../components/LandingPage/About";
import Experience from "../components/LandingPage/Experience";
import Skills from "../components/LandingPage/Skills";
import Projects from "../components/LandingPage/Projects";
import ContactForm from "../components/LandingPage/ContactForm";
import Footer from "../components/LandingPage/Footer";
import { useEffect } from "react";

const Index = () => {
    useEffect(_ => {
        if (/localhost/.test(window.location.host) === false) {
            axios.get(
                `https://back.juannavas.dev/visitor/${window.location.host}`
            );
        }
    }, []);

    return (
        <React.Fragment>
            <div className="body-bg-five">
                <div className="main-area two">
                    <Navbar />
                    <div className="main-content two">
                        <MainBanner />
                        <About />
                        <Experience />
                        <Skills />
                        <Projects />
                        <ContactForm />
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Index;
