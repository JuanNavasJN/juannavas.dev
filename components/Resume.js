import React, { Component } from "react";
export default class Resume extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="resume" name="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        {resumeData.education &&
                            resumeData.education.map((item, i) => {
                                return (
                                    <div className="row item" key={i}>
                                        <div className="twelve columns">
                                            <h3>{item.UniversityName}</h3>
                                            <p className="info">
                                                {item.specialization}
                                                <span>&bull;</span>{" "}
                                                <em className="date">
                                                    {item.MonthOfPassing}{" "}
                                                    {item.YearOfPassing}
                                                </em>
                                            </p>
                                            <p>{item.Achievements}</p>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Work</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        {resumeData.work &&
                            resumeData.work.map((item, i) => {
                                return (
                                    <div className="row item" key={i}>
                                        <div className="twelve columns">
                                            <a
                                                href={item.CompanyLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <h3>{item.CompanyName}</h3>
                                            </a>
                                            <p className="info">
                                                {item.specialization}
                                                <span>&bull;</span>{" "}
                                                <em className="date">
                                                    {item.MonthOfLeaving}{" "}
                                                    {item.YearOfLeaving}
                                                </em>
                                            </p>
                                            <p>{item.Achievements}</p>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>

                <div className="row skill">
                    <div className="three columns header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        {/* <p>{resumeData.skillsDescription}</p> */}

                        <div className="bars">
                            <ul className="skills">
                                {resumeData.skills &&
                                    resumeData.skills.map((item, i) => {
                                        return (
                                            <li key={i}>
                                                <span
                                                    className={`bar-expand`}
                                                    style={{
                                                        width: item.skillsize
                                                    }}
                                                ></span>
                                                <em>{item.skillname}</em>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
