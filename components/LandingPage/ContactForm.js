import React, { useState, useEffect } from 'react';

const ContactForm = ({ texts }) => {
  const [title1, setTitle1] = useState('');
  const [title2, setTitle2] = useState('');

  useEffect(() => {
    const tit1 = texts.find(text => text.key === 'contact-title-1') || '';
    const tit2 = texts.find(text => text.key === 'contact-title-2') || '';

    if (tit1) setTitle1(tit1.value);
    if (tit2) setTitle2(tit2.value);
  }, [texts]);

  return (
    <div
      id="contact"
      className="contact-area three border-bottom-two pt-100 pb-70"
    >
      <div className="container">
        <div className="section-title three">
          <span className="sub-title">CONTACT</span>
          <h2>{title1}</h2>
          <h2>{title2}</h2>
        </div>

        <div className="row align-items-center">
          <div className="col-md-5 col-lg-6">
            <div className="contact-content">
              <div className="top">
                <ul>
                  <li>
                    <span>Email:</span>
                    <a href="mailto:iam@juannavas.dev">iam@juannavas.dev</a>
                  </li>
                </ul>
              </div>

              <div className="bottom">
                <ul>
                  <li>
                    <a href="http://github.com/juannavasjn" target="_blank">
                      <i className="bx bxl-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://gitlab.com/juannavasjn" target="_blank">
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
