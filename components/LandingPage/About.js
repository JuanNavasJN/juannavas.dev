import React from "react";

const About = () => {
    return (
        <div id="about" className="about-area border-bottom-two three ptb-100">
            <div className="container align-items-center">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="about-img-three">
                            <img
                                className="about-img"
                                src="/img/jn.png"
                                alt="About"
                            />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="about-content">
                            <div className="section-title three">
                                <span className="sub-title">ABOUT ME</span>
                                <h2>
                                    I Am A Full Stack Developer, Specialized In
                                    JavaScript, React, Node.js
                                </h2>
                                <p className="about-me-paragraph">
                                    I have experience with each layer of web
                                    development. Also, I develop mobile
                                    applications with React Native and Flutter.
                                    I'm not an expert, but I really like the
                                    technology and I never stop learning.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
