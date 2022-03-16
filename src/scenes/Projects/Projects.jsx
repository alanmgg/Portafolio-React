import s from './Projects.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import { PROJECTS } from '../../constants/projects';
import ProjectCard from './ProjectCard/ProjectCard';
import Button from '../../components/UIElements/Button/Button';
import React, { useState, useEffect } from 'react';


const Projects = () => {
  const [projects, setProjects] = useState('All');

  useEffect(() => {
    setProjects('All');
  }, []);

  function setButtons(type) {
    setProjects(type);
  }

  return (
    <BaseLayout>
      <div className={s.content}>
        <h1 className={s.title}>
          Mis <strong className={s.purple}>trabajos</strong> recientes
        </h1>
        <p className={s.subtitle}>
          Aquí hay algunos proyectos en los que he trabajado recientemente.
        </p>

        <div style={{display: 'flex'}}>
          <Button style={{marginTop: 25, backgroundColor: '#CD5FF8', color: '#FFFFFF'}} onClick={() => setButtons('All')}>ALL</Button>
          <Button style={{marginTop: 25, marginLeft: 10, backgroundColor: '#CD5FF8', color: '#FFFFFF'}} onClick={() => setButtons('Html')}>HTML/CSS</Button>
          <Button style={{marginTop: 25, marginLeft: 10, backgroundColor: '#CD5FF8', color: '#FFFFFF'}} onClick={() => setButtons('Game')}>GAMES</Button>
        </div>

        <ul className={s.projects}>
          {PROJECTS.map((props) => (
            <ProjectCard key={props.id} {...props} props={projects}/>
          ))}
        </ul>
      </div>
    </BaseLayout>
  );
};

export default Projects;
