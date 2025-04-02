import { useTranslation } from "react-i18next";
import s from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className={s.privacyPolicyContainer}>
      <h1 className={s.title}>{t("privacyPolicy.title")}</h1>

      <section className={s.section}>
        <h2>1. {t("privacyPolicy.dataCollectionTitle")}</h2>
        <p>{t("privacyPolicy.dataCollectionDescription")}</p>
        <ul>
          <li>{t("privacyPolicy.fullName")}</li>
          <li>{t("privacyPolicy.phoneNumber")}</li>
          <li>{t("privacyPolicy.comment")}</li>
        </ul>
        <p>{t("privacyPolicy.dataUseDescription")}</p>
      </section>

      <section className={s.section}>
        <h2>2. {t("privacyPolicy.dataProcessingTitle")}</h2>
        <p>{t("privacyPolicy.dataProcessingDescription")}</p>
        <p>{t("privacyPolicy.chatBotPolicyDescription")}</p>
        <p>
          {t("privacyPolicy.chatBotPolicyLinkText")}{" "}
          <a
            href="https://telegram.org/privacy-tpa"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("privacyPolicy.chatBotPolicyLink")}
          </a>
          .
        </p>
      </section>

      <section className={s.section}>
        <h2>3. {t("privacyPolicy.dataUsageTitle")}</h2>
        <p>{t("privacyPolicy.dataUsageDescription")}</p>
      </section>

      <section className={s.section}>
        <h2>4. {t("privacyPolicy.dataSecurityTitle")}</h2>
        <p>{t("privacyPolicy.dataSecurityDescription")}</p>
      </section>

      <section className={s.section}>
        <h2>5. {t("privacyPolicy.dataConsentTitle")}</h2>
        <p>{t("privacyPolicy.dataConsentDescription")}</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
