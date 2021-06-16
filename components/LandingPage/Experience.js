import React from "react";
import Link from "next/link";

const Experience = () => {
    return (
        <div className="experience-area three border-bottom-two ptb-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">EXPERIENCE</span>
                    <h2>I Have 3+ Years Of Experience</h2>
                </div>

                <div className="experience-content">
                    <div className="experience-inner">
                        <ul className="align-items-center">
                            <li>
                                <span>2018-2020</span>
                            </li>
                            <li>
                                <span>Programmer, EYSS</span>
                            </li>
                            <li>
                                <p>
                                    React.js, Laravel, Node.js, Docker, MySQL,
                                    MongoDB...
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="experience-inner">
                        <ul className="align-items-center">
                            <li>
                                <span>2020-2021</span>
                            </li>
                            <li>
                                <span>Full Stack Developer, Freelance</span>
                            </li>
                            <li>
                                <p>
                                    React.js, Node.js, Flutter, Docker,
                                    MongoDB...
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="experience-inner">
                        <ul className="align-items-center">
                            <li>
                                <span>2021</span>
                            </li>
                            <li>
                                <span>Developer, Glufco</span>
                            </li>
                            <li>
                                <p>Vue.js, Laravel...</p>
                            </li>
                        </ul>
                    </div>

                    <div className="experience-inner">
                        <ul className="align-items-center">
                            <li>
                                <span>2021</span>
                            </li>
                            <li>
                                <span>
                                    Intermediate Full Stack Developer,
                                    Teravision
                                </span>
                            </li>
                            <li>
                                <p>Next.js, Node.js...</p>
                            </li>
                        </ul>
                    </div>

                    {/* <div className="text-center">
                        <Link href="/portfolio">
                            <a className="common-btn three">See My Portfolio</a>
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Experience;
