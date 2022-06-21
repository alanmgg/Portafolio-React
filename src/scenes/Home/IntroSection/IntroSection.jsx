import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebookSquare, FaLinkedinIn, FaTelegramPlane, FaInstagram, FaBehance } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            PERMÍTAME <span className={s.purple}> PRESENTARME </span>{' '} ...
          </h1>

          <div className={s.description}>
            <p>
              Me enamoré de la programación y al menos he aprendido algo, creo… 🤷‍♂️
            </p>

            <p>
              Mi campo de interés es la creación de
              <i>
                <b className={s.purple}>
                  {' '}
                  nuevas tecnologías y productos web.
                </b>
              </i>
            </p>

            <p>
              Un apasionado desarrollador de software Full Stack 🚀 <br />
              Tengo experiencia en la creación de{' '}
              <i>
                <b className={s.purple}>aplicaciones web y móviles</b>
              </i>{' '}
              con
              <br />
              <i>
                <b className={s.purple}>
                  JavaScript, Reactjs, Nodejs, React Native
                </b>
              </i>{' '}
              y algunas otras bibliotecas geniales
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>ENCUÉNTRAME EN</h1>
        <p>
          Siéntase libre de <span className={s.purple}>conectarse </span>
          conmigo
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/alanmgg"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/Alan.Bananas.0/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://t.me/alaaanmg"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaTelegramPlane />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.instagram.com/alanmg._/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaInstagram />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/alanmgg/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.behance.net/alanmgg"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaBehance />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
