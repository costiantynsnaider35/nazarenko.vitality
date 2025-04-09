import { useTranslation } from "react-i18next";
import FruitRain from "../FruitRain/FruitRain.jsx";
import s from "./Home.module.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className={s.home}>
      <FruitRain />
      <div className={s.homeTitle}>
        <h1>{t("home.name")}</h1>
        <h2>{t("home.profession")}</h2>
        <h3>{t("home.slogan")}</h3>
      </div>
      <div>
        <img
          src="/home.jpg"
          alt={t("home.homeImageAlt")}
          className={s.homeImg}
        />
      </div>
    </div>
  );
};

export default Home;
