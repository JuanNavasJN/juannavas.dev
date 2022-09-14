import React, { useState, useEffect } from 'react';

const Projects = ({ texts, projects, urlBase }) => {
  const [title, setTitle] = useState('');
  const [column1, setColumn1] = useState([]);
  const [column2, setColumn2] = useState([]);

  useEffect(() => {
    const tit = texts.find(text => text.key === 'projects-title') || '';

    if (tit) setTitle(tit.value);
  }, [texts]);

  useEffect(() => {
    let col1 = [],
      col2 = [];

    for (let proj of projects) {
      if (proj.column === 'first') {
        col1.push(proj);
      } else if (proj.column === 'second') {
        col2.push(proj);
      }
    }

    setColumn1(col1);
    setColumn2(col2);
  }, [projects]);

  return (
    <div id="portfolio" className="projects-area border-bottom-two ptb-100">
      <div className="container">
        <div className="section-title three">
          <span className="sub-title">PROJECTS</span>
          <h2>{title}</h2>
        </div>

        <div className="row">
          <div className="col-sm-6">
            {column1.map(proj => (
              <a target="_blank" href={proj.url} key={proj.id}>
                <div className="projects-item">
                  <img src={urlBase + proj.image.url} alt={proj.imageAlt} />
                  <div className="inner">
                    <div className="inner">
                      <h3>
                        <a target="_blank">{proj.title}</a>
                      </h3>
                      <span>{proj.tech}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="col-sm-6">
            {column2.map(proj => (
              <a target="_blank" href={proj.url} key={proj.id}>
                <div className="projects-item">
                  <img src={urlBase + proj.image.url} alt={proj.imageAlt} />
                  <div className="inner">
                    <div className="inner">
                      <h3>
                        <a target="_blank">{proj.title}</a>
                      </h3>
                      <span>{proj.tech}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
