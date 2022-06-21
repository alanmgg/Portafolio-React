import s from './ProjectCard.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import React, { useState, useEffect } from 'react';

const ProjectCard = ({ id, image, title, description, type, props }) => {
  const location = useLocation();
  const [projects, setProjects] = useState('All');

  useEffect(() => {
    setProjects('All');
  }, [])
  
  useEffect(() => {
    setProjects(props);
  }, [props]);

  if (projects === 'All') {
    console.log('Renderice todos');
    return (
      <li className={s.card}>
        <div className={s.cardWrapper}>
          <Link
            to={{
              pathname: `/project/${id}`,
              state: {
                background: location,
              },
            }}
          >
            <LazyLoadImage
              alt="card-img"
              effect="blur"
              src={image.src}
              width="100%"
              style={{ minHeight: '10rem' }}
              placeholderSrc={image.placeholderSrc}
            />
          </Link>
  
          <div className={s.cardBody}>
            <h3 className={s.title}>{title}</h3>
            <p className={s.description}>{description}</p>
          </div>
        </div>
      </li>
    );
  } else if (projects === 'Html' && type === 'HTML') {
    console.log('Renderice Html');
    return (
      <li className={s.card}>
        <div className={s.cardWrapper}>
          <Link
            to={{
              pathname: `/project/${id}`,
              state: {
                background: location,
              },
            }}
          >
            <LazyLoadImage
              alt="card-img"
              effect="blur"
              src={image.src}
              width="100%"
              style={{ minHeight: '10rem' }}
              placeholderSrc={image.placeholderSrc}
            />
          </Link>
  
          <div className={s.cardBody}>
            <h3 className={s.title}>{title}</h3>
            <p className={s.description}>{description}</p>
          </div>
        </div>
      </li>
    );
  } else if (projects === 'Game' && type === 'GAME') {
    console.log('Renderice Game');
    return (
      <li className={s.card}>
        <div className={s.cardWrapper}>
          <Link
            to={{
              pathname: `/project/${id}`,
              state: {
                background: location,
              },
            }}
          >
            <LazyLoadImage
              alt="card-img"
              effect="blur"
              src={image.src}
              width="100%"
              style={{ minHeight: '10rem' }}
              placeholderSrc={image.placeholderSrc}
            />
          </Link>
  
          <div className={s.cardBody}>
            <h3 className={s.title}>{title}</h3>
            <p className={s.description}>{description}</p>
          </div>
        </div>
      </li>
    );
  } else {
    return null;
  }
};

export default ProjectCard;
