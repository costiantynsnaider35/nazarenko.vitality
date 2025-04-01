import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import FruitRain from "../FruitRain/FruitRain.jsx";
import s from "./Home.module.css";

const Home = () => {
  const { t } = useTranslation();
  const [showFruitRain, setShowFruitRain] = useState(false);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisited");

    if (!hasVisitedBefore) {
      setShowFruitRain(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  return (
    <div className={s.home}>
      {showFruitRain && <FruitRain />}{" "}
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
