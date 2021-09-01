import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const alertContent = () => {
    MySwal.fire({
        title: "Congratulations!",
        text: "Your message was successfully send and will back to you soon",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    });
};

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: "",
};

const ContactForm = () => {
    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        console.log(contact);
    };

    const onSubmit = async e => {
        // e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            await axios.post(url, payload);
            console.log(url);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div
            id="contact"
            className="contact-area three border-bottom-two pt-100 pb-70"
        >
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">CONTACT</span>
                    <h2>Have You Any Project?</h2>
                    <h2>Feel Free To Email Me</h2>
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
