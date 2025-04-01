import { useTranslation } from "react-i18next";
import s from "./About.module.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className={s.about}>
      <div className={s.aboutContainer}>
        <img
          src="/about.jpg"
          alt={t("about.aboutImageAlt")}
          className={s.aboutImg}
        />
        <h1 className={s.aboutTitle}>{t("about.aboutText")}</h1>
      </div>
      <div className={s.aboutContainer2}>
        <div>
          <h1 className={s.aboutReviews}>{t("about.clientReviewsTitle")}</h1>
          <ul className={s.aboutReviewsList}>
            {[...Array(8)].map((_, index) => (
              <li key={index}>
                <img
                  src={`/rew${index + 1}.jpg`}
                  alt={t("about.reviewImageAlt", { number: index + 1 })}
                  className={s.aboutReviewsItem}
                />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className={s.aboutSert}>{t("about.achievementsTitle")}</h1>
          <ul className={s.aboutSertGaleryList}>
            {[...Array(6)].map((_, index) => (
              <li key={index}>
                <img
                  src={`/ser${index + 1}.jpg`}
                  alt={t("about.achievementImageAlt", { number: index + 1 })}
                  className={s.aboutSertGaleryItem}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
