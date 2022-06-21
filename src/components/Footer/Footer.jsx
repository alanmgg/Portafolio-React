import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebookSquare, FaLinkedinIn, FaTelegramPlane, FaInstagram, FaBehance } from 'react-icons/fa';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>Diseñado y desarrollado por Alan Mora</h3>
        </div>

        <div className={s.copyright}>
          <h3>Copyright © {year} Alan Francisco Mora</h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/alanmgg"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Alan.Bananas.0/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/alaaanmg"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/alanmg._/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alanmgg/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/alanmgg"
                target="_blank"
                rel="noreferrer"
              >
                <FaBehance />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
