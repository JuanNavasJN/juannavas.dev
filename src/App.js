import React, { Component } from "react";
import Header from "./components/Header";
// import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
// import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
// import resumeData from "./resumeData";
import axios from "axios";
import "./App.css";

class App extends Component {
    state = {
        resumeData: {}
    };
    componentDidMount = async () => {
        let res = await axios.get("https://api.juannavas.xyz/portfolios/1");
        this.setState({
            resumeData: res.data.data
        });
    };
    render() {
        let { resumeData } = this.state;
        return (
            <div className="App">
                <Header resumeData={resumeData} />
                {/* <About resumeData={resumeData}/> */}
                <Resume resumeData={resumeData} />
                <Portfolio resumeData={resumeData} />
                {/* <Testimonials resumeData={resumeData} /> */}
                <ContactUs resumeData={resumeData} />
                <Footer resumeData={resumeData} />
            </div>
        );
    }
}

export default App;
