import Head from 'next/head';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
// import About from "./components/About";
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
// import Testimonials from "./components/Testimonials";
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
// import resumeData from "./resumeData";
import axios from 'axios';
const Home = ({ resumeData, works }) => {
    return (
        <div className="App">
            <Header resumeData={resumeData} />
            {/* <About resumeData={resumeData}/> */}
            <Resume resumeData={resumeData} />
            <Portfolio works={works} />
            {/* <Testimonials resumeData={resumeData} /> */}
            <ContactUs resumeData={resumeData} />
            <Footer resumeData={resumeData} />
        </div>
    );
};

Home.getInitialProps = async function () {
    const urlBase = 'https://api.juannavas.dev';

    const res = await axios.get(urlBase + '/portfolios/1');

    // ---------- Portfolio ---------

    const projects = (await axios.get(urlBase + '/projects')).data;
    let works = projects
        .map(e => ({
            name: e.name,
            description: e.description,
            imgurl: urlBase + e.image.url,
            url: e.url,
        }))
        .reverse();

    return {
        resumeData: res.data.data,
        works,
    };
};

export default Home;
