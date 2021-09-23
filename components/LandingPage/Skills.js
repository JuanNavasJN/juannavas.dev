import React from "react";

const Skills = () => {
    return (
        <div className="skills-area border-bottom-two ptb-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">SKILLS</span>
                    <h2>
                        Here Are Some Overview Of My Skills Just Have A Look
                    </h2>
                </div>

                <div className="skill-wrap">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="skill">
                                <h3>REACT.JS</h3>
                                <div
                                    className="skill-bar  wow fadeInLeftBig"
                                    style={{
                                        width: "100%",
                                    }}
                                ></div>
                            </div>

                            <div className="skill">
                                <h3>REACT NATIVE</h3>
                                <div
                                    className="skill-bar  wow fadeInLeftBig"
                                    style={{
                                        width: "100%",
                                    }}
                                ></div>
                            </div>

                            <div className="skill">
                                <h3>AWS</h3>
                                <div
                                    className="skill-bar  wow fadeInLeftBig"
                                    style={{
                                        width: "100%",
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 mt-5 mt-md-0">
                            <div className="skill ">
                                <h3>NODE.JS</h3>
                                <div
                                    className="skill-bar wow fadeInLeftBig"
                                    style={{
                                        width: "100%",
                                    }}
                                ></div>
                            </div>

                            <div className="skill">
                                <h3>FLUTTER</h3>
                                <div
                                    className="skill-bar wow fadeInLeftBig"
                                    style={{
                                        width: "100%",
                                    }}
                                ></div>
                            </div>

                            <div className="skill">
                                <h3>DOCKER</h3>
                                <div
                                    className="skill-bar wow fadeInLeftBig"
                                    style={{
                                        width: "100%",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
