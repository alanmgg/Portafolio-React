import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hola a todos, soy{' '}
        <span className={s.purple}>Alan Francisco Mora </span>
        de <span className={s.purple}> México, CDMX.</span>
        <br />
        Experto desarrollador web con <span className={s.purple}>React</span> y <span className={s.purple}>Javascript</span>
        <br /> 
        Ingeniero en computación en la Facultad de Ingeniería, <span className={s.purple}>UNAM</span>
        <br />
        <br />
        Además de programar, ¡algunas otras actividades que me encantan hacer!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Hacer música
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Jugar videojuegos
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Viajar
        </li>
      </ul>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "¡Esfuérzate por construir cosas que marquen la diferencia!"{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;
