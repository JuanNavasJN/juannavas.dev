import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const MainBanner = ({ texts }) => {
  const [subtitle, setSubtitle] = useState('');

  useEffect(() => {
    const sub = texts.find(text => text.key === 'subtitle') || '';

    if (sub) setSubtitle(sub.value);
  }, [texts]);

  return (
    <div id="home" className="banner-area border-bottom-two three">
      <div className="common-right-text-two">
        <span>
          JUAN <br /> NAVAS <br /> FULL <br /> STACK <br />
          ENGINEER
        </span>
      </div>

      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="banner-content">
              <h1>
                <span>Juan</span> Navas
              </h1>
              <p>
                Hello! I'm a <span>Full-Stack Web Developer</span>. {subtitle}
              </p>

              <div className="banner-btn-area">
                <AnchorLink href="#contact">
                  <a className="common-btn three">Contact Me</a>
                </AnchorLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
