import s from "./About.module.css";

const About = () => {
  return (
    <div className={s.about}>
      <div className={s.aboutContainer}>
        <img src="/about.jpg" alt="About img" className={s.aboutImg} />
        <h1 className={s.aboutTitle}>ОБО МНЕ</h1>
      </div>
      <div>
        <h1 className={s.aboutCert}>СЕРТИФИКАТЫ</h1>
      </div>
    </div>
  );
};
export default About;
