import React, { Component } from "react";
import { Link } from "react-scroll";

export default class Footer extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            {resumeData.socialLinks &&
                                resumeData.socialLinks.map(item => {
                                    return (
                                        <li>
                                            <a href={item.url}>
                                                <i className={item.className} />
                                            </a>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                    <div id="go-top">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            duration={500}
                            delay={0}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                        >
                            <i className="icon-up-open" />
                        </Link>
                        {/* <a className="smoothscroll" title="Back to Top" href="#home">
          </a> */}
                    </div>
                </div>
            </footer>
        );
    }
}
