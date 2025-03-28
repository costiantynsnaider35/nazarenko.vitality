import s from "./About.module.css";

const About = () => {
  return (
    <div className={s.about}>
      <div className={s.aboutContainer}>
        <img src="/about.jpg" alt="About img" className={s.aboutImg} />
        <h1 className={s.aboutTitle}>ОБО МНЕ</h1>
      </div>
      <ul className={s.aboutSertGaleryList}>
        <li>
          <img
            src="/ser1 (1).jpg"
            alt="ser1  img"
            className={s.aboutSertGaleryItem}
          />
        </li>
        <li>
          <img
            src="/ser2 (1).jpg"
            alt="ser2  img"
            className={s.aboutSertGaleryItem}
          />
        </li>
        <li>
          <img
            src="/ser3 (1).jpg"
            alt="ser3  img"
            className={s.aboutSertGaleryItem}
          />
        </li>
        <li>
          <img
            src="/ser4 (1).jpg"
            alt="ser4  img"
            className={s.aboutSertGaleryItem}
          />
        </li>
        <li>
          <img
            src="/ser5 (1).jpg"
            alt="ser5  img"
            className={s.aboutSertGaleryItem}
          />
        </li>
        <li>
          <img
            src="/ser6 (1).jpg"
            alt="ser6  img"
            className={s.aboutSertGaleryItem}
          />
        </li>
      </ul>
    </div>
  );
};
export default About;
