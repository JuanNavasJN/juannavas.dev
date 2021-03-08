import React from "react";
import Navbar from "../components/LandingPage/Navbar";
import MainBanner from "../components/LandingPage/MainBanner";
import About from "../components/LandingPage/About";
import Services from "../components/LandingPage/Services";
import Experience from "../components/LandingPage/Experience";
import Skills from "../components/LandingPage/Skills";
import Projects from "../components/LandingPage/Projects";
import ContactForm from "../components/LandingPage/ContactForm";
import Footer from "../components/LandingPage/Footer";

const Index3 = () => {
    return (
        <React.Fragment>
            <div className="body-bg-five">
                <div className="main-area two">
                    <Navbar />
                    <div className="main-content two">
                        <MainBanner />
                        <About />
                        <Services />
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

export default Index3;
