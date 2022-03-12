import s from './MainSection.module.scss';
import homeMainIcon from '../../../assets/home-main2.svg';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MainSection = () => {
  return (
    <section className={s.content}>
      <div className={s.header}>
        <h2 style={{ paddingBottom: 15 }} className={s.title}>
          ¡Hola! <span className={s.wave}>👋🏻</span>
        </h2>

        <h1 className={s.mainTitle}>
          YO SOY
          <strong className={s.mainName}> ALAN MORA</strong>
        </h1>

        <div style={{ paddingTop: 50 }}>
          <Typewriter
            strings={[
              'Full Stack Developer',
              'Aprendizaje continuo',
              'Desarrollador de React Native',
            ]}
            wrapperClassName={s.typewriterWrapper}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>

      <LazyLoadImage
        alt="home-img"
        effect="blur"
        src={homeMainIcon}
        wrapperClassName={s.homeMainIcon}
      />
    </section>
  );
};

export default MainSection;
