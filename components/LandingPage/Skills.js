import React, { useState, useEffect } from 'react';

const Skills = ({ texts, skills }) => {
  const [title, setTitle] = useState('');
  const [column1, setColumn1] = useState([]);
  const [column2, setColumn2] = useState([]);

  useEffect(() => {
    const tit = texts.find(text => text.key === 'skills-title') || '';

    if (tit) setTitle(tit.value);

    const c1 = skills.find(col => col.column === '1');
    if (c1) setColumn1(c1.values);

    const c2 = skills.find(col => col.column === '2');
    if (c2) setColumn2(c2.values);
  }, [texts]);

  return (
    <div className="skills-area border-bottom-two ptb-100">
      <div className="container">
        <div className="section-title three">
          <span className="sub-title">SKILLS</span>
          <h2>{title}</h2>
        </div>

        <div className="skill-wrap">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              {column1.map(skill => (
                <div className="skill" key={skill}>
                  <h3>{skill}</h3>
                  <div
                    className="skill-bar  wow fadeInLeftBig"
                    style={{
                      width: '100%'
                    }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="col-sm-12 col-md-6 mt-5 mt-md-0">
              {column2.map(skill => (
                <div className="skill" key={skill}>
                  <h3>{skill}</h3>
                  <div
                    className="skill-bar  wow fadeInLeftBig"
                    style={{
                      width: '100%'
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
