import React from "react";

const ContactForm = () => {
    return (
        <div
            id="contact"
            className="contact-area three border-bottom-two pt-100 pb-70"
        >
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">CONTACT</span>
                    <h2>Have You Any Project?</h2>
                    <h2>Feel Free To Contact Me</h2>
                </div>

                <div className="row align-items-center">
                    <div className="col-md-5 col-lg-6">
                        <div className="contact-content">
                            <div className="top">
                                <ul>
                                    <li>
                                        <span>Email:</span>
                                        <a href="mailto:iam@juannavas.dev">
                                            iam@juannavas.dev
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="bottom">
                                <ul>
                                    <li>
                                        <a
                                            href="http://github.com/juannavasjn"
                                            target="_blank"
                                        >
                                            <i className="bx bxl-github"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="http://gitlab.com/juannavasjn"
                                            target="_blank"
                                        >
                                            <i className="bx bxl-gitlab"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/in/juannavasjn"
                                            target="_blank"
                                        >
                                            <i className="bx bxl-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
