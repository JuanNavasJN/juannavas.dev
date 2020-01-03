import React, { Component } from "react";
import axios from "axios";

const urlBase = "https://api.juannavas.xyz";

export default class Porfolio extends Component {
    state = {
        works: []
    };
    componentDidMount = async () => {
        const projects = (await axios.get(urlBase + "/projects")).data;
        let works = projects
            .map(e => ({
                name: e.name,
                description: e.description,
                imgurl: urlBase + e.image.url,
                url: e.url
            }))
            .reverse();
        this.setState({ works });
    };
    render() {
        let works = this.state.works;
        return (
            <section id="portfolio" name="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works.</h1>
                        <div
                            id="portfolio-wrapper"
                            className="bgrid-quarters s-bgrid-thirds cf"
                        >
                            {works.map(item => {
                                return (
                                    <div className="columns portfolio-item">
                                        <div className="item-wrap">
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src={`${item.imgurl}`}
                                                    className="item-img"
                                                    alt={item.name}
                                                />
                                                <div className="overlay">
                                                    <div className="portfolio-item-meta">
                                                        <h5>{item.name}</h5>
                                                        <p>
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
