import s from './TechSkills.module.scss';
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, DiSass, DiMysql, DiPython, DiCss3, DiDjango, DiLinux, DiSwift } from 'react-icons/di';
import { SiTypescript, SiPostgresql, SiAmazonaws } from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <SiTypescript />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiPython />
      </li>
      <li className={s.techIcon}>
        <DiSwift />
      </li>
      <li className={s.techIcon}>
        <DiCss3 />
      </li>
      <li className={s.techIcon}>
        <DiLinux />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <DiSass />
      </li>
      <li className={s.techIcon}>
        <SiAmazonaws />
      </li>
      <li className={s.techIcon}>
        <DiDjango />
      </li>
      <li className={s.techIcon}>
        <DiMysql />
      </li>
      <li className={s.techIcon}>
        <SiPostgresql />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
    </ul>
  );
};

export default TechSkills;
