import { useTranslation } from "react-i18next";
import s from "./ForWhom.module.css";

const ForWhom = () => {
  const { t } = useTranslation();

  return (
    <div className={s.whom}>
      <ul className={s.whomList}>
        <h1 className={s.whomTitle}>{t("forWhom.title")}</h1>
        {t("forWhom.items", { returnObjects: true }).map((text, index) => (
          <li key={index} className={s.whomItem}>
            <span>{text}</span>
          </li>
        ))}
      </ul>
      <img src="/whoimg.jpg" alt="fotor img" />
    </div>
  );
};

export default ForWhom;
