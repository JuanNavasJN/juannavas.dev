import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const MainBanner = () => {
    return (
        <div id="home" className="banner-area border-bottom-two three">
            <div className="common-right-text-two">
                <span>
                    JUAN <br /> NAVAS <br /> FULL <br /> STACK <br />
                    DEVELOPER
                </span>
            </div>

            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-content">
                            <h1>
                                <span>Juan</span> Navas
                            </h1>
                            <p>
                                Hello! I'm a <span>Full Stack Developer</span>.
                                I have experience with React.js, Node.js,
                                Flutter, MongoDB, Docker, AWS, Git... I never
                                stop learning.
                            </p>

                            <div className="banner-btn-area">
                                <AnchorLink href="#contact">
                                    <a className="common-btn three">
                                        Contact With Me
                                    </a>
                                </AnchorLink>
                                {/* <Link href="#">
                                    <a className="common-btn banner-btn three">
                                        Hire Me
                                    </a>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;
