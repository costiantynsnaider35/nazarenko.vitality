import { useTranslation } from "react-i18next";
import s from "./UsefullInfo.module.css";

const UsefullInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={s.info}>
      <h2 className={s.infoTitle}>{t("UsefullInfo.title")}</h2>
      <img
        className={s.infoImg}
        src="/public/plate.jpg"
        alt={t("UsefullInfo.altImg")}
      />
    </div>
  );
};
export default UsefullInfo;
