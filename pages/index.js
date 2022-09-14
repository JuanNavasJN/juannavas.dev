import React from 'react';
import Navbar from '../components/LandingPage/Navbar';
import MainBanner from '../components/LandingPage/MainBanner';
import About from '../components/LandingPage/About';
import Experience from '../components/LandingPage/Experience';
import Skills from '../components/LandingPage/Skills';
import Projects from '../components/LandingPage/Projects';
import ContactForm from '../components/LandingPage/ContactForm';
import Footer from '../components/LandingPage/Footer';
import { useEffect } from 'react';
import axios from 'axios';

const Index = ({ texts, experiences, skills, projects, files, urlBase }) => {
  useEffect(_ => {
    if (/localhost/.test(window.location.host) === false) {
      axios.get(`https://back.juannavas.dev/visitor/${window.location.host}`);
    }
  }, []);

  return (
    <React.Fragment>
      <div className="body-bg-five">
        <div className="main-area two">
          <Navbar files={files} urlBase={urlBase} />
          <div className="main-content two">
            <MainBanner texts={texts} />
            <About texts={texts} files={files} urlBase={urlBase} />
            <Experience texts={texts} experiences={experiences} />
            <Skills texts={texts} skills={skills} />
            <Projects texts={texts} projects={projects} urlBase={urlBase} />
            <ContactForm texts={texts} />
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Index.getInitialProps = async function () {
  const urlBase = process.env.API_URL_BASE;

  const texts = (await axios.get(urlBase + '/texts')).data;
  const experiences = (
    await axios.get(urlBase + '/experiences?_sort=date:DESC,id:DESC')
  ).data;
  const skills = (await axios.get(urlBase + '/skills')).data;
  const projects = (await axios.get(urlBase + '/projects')).data;

  const files = (await axios.get(urlBase + '/files')).data;

  return {
    texts,
    experiences,
    skills,
    projects,
    files,
    urlBase
  };
};

export default Index;
