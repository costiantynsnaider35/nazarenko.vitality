import { useTranslation } from "react-i18next";
import s from "./UsefullInfo.module.css";

const UsefullInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={s.info}>
      <div className={s.infoPlane}>
        <h2 className={s.infoTitle}>{t("UsefullInfo.title")}</h2>
        <img
          className={s.infoImg}
          src="/plate.jpg"
          alt={t("UsefullInfo.altImg")}
        />
      </div>

      <img
        className={s.infoImgRec}
        src="/public/rec1.PNG"
        alt={t("UsefullInfo.altRec1")}
      />
      <img
        className={s.infoImgRec}
        src="/public/rec2.PNG"
        alt={t("UsefullInfo.altRec2")}
      />
      <img
        className={s.infoImgRec}
        src="/public/rec3.PNG"
        alt={t("UsefullInfo.altRec3")}
      />
      <img
        className={s.infoImgRec}
        src="/public/rec3.PNG"
        alt={t("UsefullInfo.altRec3")}
      />
      <img
        className={s.infoImgRec}
        src="/public/rec3.PNG"
        alt={t("UsefullInfo.altRec3")}
      />
    </div>
  );
};
export default UsefullInfo;
