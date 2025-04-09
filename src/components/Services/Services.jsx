import { useTranslation } from "react-i18next";
import s from "./Services.module.css";

const Services = () => {
  const { t } = useTranslation();

  const servicesData = t("services", { returnObjects: true });

  return (
    <div className={s.services}>
      {servicesData.map((service, index) => (
        <div key={index} className={s.servicesCard}>
          <h2 className={s.servicesTitle}>{service.title}</h2>
          <p className={s.servicesDesc}>{service.description}</p>
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
