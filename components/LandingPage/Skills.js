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
                    <div className="skill">
                        <h3>JAVASCRIPT</h3>
                        <div
                            className="skill-bar skill1 wow fadeInLeftBig"
                            style={{
                                width: "90%",
                            }}
                        >
                            <span className="skill-count">90%</span>
                        </div>
                    </div>

                    <div className="skill">
                        <h3>REACT JS</h3>
                        <div
                            className="skill-bar skill2 wow fadeInLeftBig"
                            style={{
                                width: "70%",
                            }}
                        >
                            <span className="skill-count">70%</span>
                        </div>
                    </div>

                    <div className="skill">
                        <h3>FLUTTER</h3>
                        <div
                            className="skill-bar skill4 wow fadeInLeftBig"
                            style={{
                                width: "40%",
                            }}
                        >
                            <span className="skill-count">40%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
