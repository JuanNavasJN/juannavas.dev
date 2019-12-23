import React, { Component } from "react";
import Particles from "react-particles-js";
import { scroller } from "react-scroll";

export default class Header extends Component {
    componentDidMount = _ => {
        window.addEventListener("scroll", _ => {
            let nav = document.querySelector("#nav-wrap");
            if (window.pageYOffset > 650) {
                nav.classList.add("opaque");
            } else {
                nav.classList.remove("opaque");
            }
        });
    };

    handleClick = (e, name) => {
        e.preventDefault();
        scroller.scrollTo(name, {
            duration: 500,
            smooth: true
            // offset: 150 // Scrolls to element + 50 pixels down the page
        });
    };

    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                <header name="home" id="home">
                    <nav id="nav-wrap" className="">
                        <a
                            className="mobile-btn"
                            href="#nav-wrap"
                            title="Show navigation"
                        >
                            Show navigation
                        </a>
                        <a
                            className="mobile-btn"
                            href="/#"
                            title="Hide navigation"
                        >
                            Hide navigation
                        </a>
                        <ul id="nav" className="nav">
                            <li>
                                <a
                                    className=""
                                    href="/"
                                    onClick={e => this.handleClick(e, "home")}
                                >
                                    Home
                                </a>
                            </li>
                            {/* <li>
                                <a className="smoothscroll" href="#about">
                                    About
                                </a>
                            </li> */}
                            <li>
                                <a
                                    className=""
                                    href="/#resume"
                                    onClick={e => this.handleClick(e, "resume")}
                                >
                                    Resume
                                </a>
                            </li>
                            <li>
                                <a
                                    className=""
                                    href="/#portfolio"
                                    onClick={e =>
                                        this.handleClick(e, "portfolio")
                                    }
                                >
                                    Works
                                </a>
                            </li>
                            {/* <li>
                                <a
                                    className="smoothscroll"
                                    href="#testimonials"
                                >
                                    Testimonials
                                </a>
                            </li> */}
                            <li>
                                <a
                                    className=""
                                    href="/#contact"
                                    onClick={e =>
                                        this.handleClick(e, "contact")
                                    }
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="row banner">
                        <div className="banner-text">
                            <div className="profile-pic-container">
                                <img
                                    className="profile-pic"
                                    src="images/jn.jpg"
                                    alt=""
                                />
                            </div>
                            <h1 className="responsive-headline">
                                I am {resumeData.name}.
                            </h1>
                            <h3
                                style={{
                                    color: "#fff",
                                    fontFamily: "sans-serif "
                                }}
                            >
                                {resumeData.roleDescription}
                            </h3>
                            <hr />
                            {/* <ul className="social">
                                {resumeData.socialLinks &&
                                    resumeData.socialLinks.map(item => {
                                        return (
                                            <li key={item.name}>
                                                <a
                                                    href={item.url}
                                                    target="_blank"
                                                >
                                                    <i
                                                        className={
                                                            item.className
                                                        }
                                                    ></i>
                                                </a>
                                            </li>
                                        );
                                    })}
                            </ul> */}
                        </div>
                    </div>

                    <Particles
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh"
                        }}
                        params={{
                            particles: {
                                number: {
                                    value: 150
                                },
                                size: {
                                    value: 3
                                }
                            },
                            interactivity: {
                                events: {
                                    onhover: {
                                        enable: true,
                                        mode: "repulse"
                                    }
                                }
                            }
                        }}
                    />

                    <p className="scrolldown">
                        <a
                            className=""
                            href="/#about"
                            onClick={e => this.handleClick(e, "resume")}
                        >
                            <i className="icon-down-circle"></i>
                        </a>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}
