import React, { useState, useEffect } from 'react';

const About = ({ texts, files, urlBase }) => {
  const [title, setTitle] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [picUrl, setPicUrl] = useState('');

  useEffect(() => {
    const tit = texts.find(text => text.key === 'about-me-title') || '';
    const par = texts.find(text => text.key === 'about-me-paragraph') || '';

    if (tit) setTitle(tit.value);

    if (par) setParagraph(par.value);
  }, [texts]);

  useEffect(() => {
    const pic = files.find(file => file.name === 'me');

    if (pic) {
      setPicUrl(urlBase + pic.file.url);
    }
  }, [files]);

  return (
    <div id="about" className="about-area border-bottom-two three ptb-100">
      <div className="container align-items-center">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="about-img-three">
              <img className="about-img" src={picUrl} alt="About" />
            </div>
          </div>

          <div className="col-lg-7">
            <div className="about-content">
              <div className="section-title three">
                <span className="sub-title">ABOUT ME</span>
                <h2>{title}</h2>
                <p className="about-me-paragraph">{paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
