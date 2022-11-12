import React from 'react';
import IMG1 from '../../assets/project1.JPG';
import IMG2 from '../../assets/project2.JPG';
import IMG3 from '../../assets/project3.JPG';
import IMG4 from '../../assets/project4.JPG';
import IMG5 from '../../assets/project5.JPG';
import IMG6 from '../../assets/project6.JPG';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'RINOR V3',
      img: IMG1,
      description:
        'RINOR is a leading travel agency in Skardu',
      technologies: 'React | Typescript | TailwindCSS',
      link: 'http://rinor.pk/',
      github: 'https://github.com/cyedzada-1/',
    },
    
    {
      id: 2,
      title: 'Polka Verse',
      img: IMG2,
      description: 'The Polkaverse is the first contemporary blockchain based Free to Play and Earn Game. Its an open and decentralised virtual universe built using UNITY and CRYENGINE',
      technologies: 'React | JavaScript | Material-UI',
      link: 'http://polkaverse.info/',
      github:'https://github.com/cyedzada-1/polkaverse/tree/master',
    },
    {
      id: 3,
      title: 'RINOR V2 ',
      img: IMG3,
      description:
        'Rinor Website Second release the converted form of HTML and LESS template into react functional component ',
      technologies: 'React  | HTML | LESS (CSS) ',
      link: 'https://rinor.netlify.app',
      github: 'https://github.com/cyedzada-1/react-less-rinor-site',
    },
    {
      id: 4,
      title: 'Naynawa Travel and Tours',
      img: IMG4,
      description:
        'tourism related website ',
      technologies: 'HTML | CSS',
      link: 'https://naynawa-pk.netlify.app/',
      github: 'https://github.com/cyedzada-1/naynawa',
    }, 
    
    {
      id: 5,
      title: 'Booking FORM',
      img: IMG5,
      description:
        'Airline Booking Form using mernstack, used formik and yup libraries for state management and validation',
      technologies: 'MERN Stack | MUI | Formik | Yup',
      link: 'https://formik-booking-form.netlify.app/',
      github: 'https://github.com/cyedzada-1/booking-form',
    },
    {
      id: 6,
      title: 'Baltistan Tours',
      img: IMG6,
      description:
        'Baltistan Tours Pakistan is a well established, reliable and competitively priced Trekking & Tours Organization ',
      technologies: 'CMS | Wordpress',
      link: 'https://baltistantours.com/',
      github: 'https://github.com/cyedzada-1/',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
