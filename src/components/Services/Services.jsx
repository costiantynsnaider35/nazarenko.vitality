import { useTranslation } from "react-i18next";
import s from "./Services.module.css";

const Services = () => {
  const { t } = useTranslation();

  const servicesData = t("services", { returnObjects: true });

  return (
    <div className={s.services}>
      {servicesData.map((service, index) => (
        <div key={index} className={s.servicesCard}>
          <div className={s.titleContainer}>
            <h1 className={s.servicesTitle}>{service.title}</h1>
            <p className={s.servicesDesc}>{service.description}</p>
          </div>

          <img
            src={service.image}
            alt={`Img ${service.title}`}
            className={s.servicesImg}
          />
          <button className={s.servicesBtn}>
            <span>
              <a href={service.link} target="_blank" rel="noopener noreferrer">
                {service.button}
              </a>
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Services;
