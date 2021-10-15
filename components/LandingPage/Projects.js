import React from "react";

const Projects = () => {
    return (
        <div id="portfolio" className="projects-area border-bottom-two ptb-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">PROJECTS</span>
                    <h2>Here Are Some Projects I Worked On</h2>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <a
                            target="_blank"
                            href="https://visitors.juannavas.dev/"
                        >
                            <div className="projects-item">
                                <img
                                    src="/images/projects/visitors.png"
                                    alt="Visitors"
                                />
                                <div className="inner">
                                    <div className="inner">
                                        <h3>
                                            <a target="_blank">Visitors</a>
                                        </h3>
                                        <span>Next.js</span>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a
                            target="_blank"
                            href="https://muncak-upwork.vercel.app/"
                        >
                            <div className="projects-item">
                                <img
                                    src="/images/projects/muncak.png"
                                    alt="Muncak"
                                />
                                <div className="inner">
                                    <div className="inner">
                                        <h3>
                                            <a target="_blank">Muncak</a>
                                        </h3>
                                        <span>React.js</span>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a
                            target="_blank"
                            href="https://github.com/orionprotocol/trading-terminal"
                        >
                            <div className="projects-item">
                                <img
                                    src="/images/projects/orion.png"
                                    alt="Orion"
                                />
                                <div className="inner">
                                    <div className="inner">
                                        <h3>
                                            <a target="_blank">Orion</a>
                                        </h3>
                                        <span>React.js - Web3.js</span>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a
                            target="_blank"
                            href="https://francescasiciliano.veest.net/"
                        >
                            <div className="projects-item">
                                <img
                                    src="/images/projects/francesca.png"
                                    alt="Francesca"
                                />
                                <div className="inner">
                                    <div className="inner">
                                        <h3>
                                            <a target="_blank">Francesca</a>
                                        </h3>
                                        <span>Next.js</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-sm-6">
                        <a target="_blank" href="https://logicol.es/">
                            <div className="projects-item">
                                <img
                                    src="/images/projects/logicol.png"
                                    alt="Logicol"
                                />
                                <div className="inner">
                                    <div className="inner">
                                        <h3>
                                            <a target="_blank">Logicol</a>
                                        </h3>
                                        <span>React.js</span>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a
                            target="_blank"
                            href="https://akowe-landing.vercel.app/"
                        >
                            <div className="projects-item">
                                <img
                                    src="/images/projects/akowe.png"
                                    alt="Akowe"
                                />
                                <div className="inner">
                                    <div className="inner">
                                        <h3>
                                            <a target="_blank">Akowe</a>
                                        </h3>
                                        <span>React.js</span>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a
                            target="_blank"
                            href="https://jquery-cafe.vercel.app/"
                        >
                            <div className="projects-item">
                                <img
                                    src="/images/projects/cafe.png"
                                    alt="Cafe"
                                />
                                <div className="inner">
                                    <div className="inner">
                                        <h3>
                                            <a target="_blank">Cafe</a>
                                        </h3>
                                        <span>jQuery</span>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a
                            target="_blank"
                            href="https://play.google.com/store/apps/details?id=com.veest.cuanto_es"
                        >
                            <div className="projects-item">
                                <img
                                    src="/images/projects/cuanto_es.png"
                                    alt="CuantoEs"
                                />
                                <div className="inner">
                                    <div className="inner">
                                        <h3>
                                            <a target="_blank">CuantoEs</a>
                                        </h3>
                                        <span>Flutter</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* <div className="text-center">
                    <Link href="/works">
                        <a className="common-btn three" target="_blank">
                            Explore Projects
                        </a>
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default Projects;
