import React, { useState, useEffect } from 'react';

const Experience = ({ texts, experiences }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    const tit = texts.find(text => text.key === 'experience-title') || '';

    if (tit) setTitle(tit.value);
  }, [texts]);

  return (
    <div className="experience-area three border-bottom-two ptb-100">
      <div className="container">
        <div className="section-title three">
          <span className="sub-title">EXPERIENCE</span>
          <h2>{title}</h2>
        </div>

        <div className="experience-content">
          {experiences &&
            experiences.map(exp => (
              <div className="experience-inner" key={'exp-' + exp.id}>
                <ul className="align-items-center">
                  <li>
                    <span>{exp.date}</span>
                  </li>
                  <li>
                    <span>{exp.position}</span>
                  </li>
                  <li>
                    <p>{exp.tech}</p>
                  </li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
