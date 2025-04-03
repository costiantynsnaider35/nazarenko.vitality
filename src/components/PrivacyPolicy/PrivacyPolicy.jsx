import { useTranslation } from "react-i18next";
import s from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className={s.privacyPolicy}>
      <h1 className={s.titlePolicy}>{t("privacyPolicy.title")}</h1>

      <div className={s.policyList}>
        <h2 className={s.policyListTitle}>
          1.{t("privacyPolicy.dataCollectionTitle")}
        </h2>
        <p>{t("privacyPolicy.dataCollectionDescription")}</p>
        <ul>
          <li>-{t("privacyPolicy.fullName")}</li>
          <li>-{t("privacyPolicy.phoneNumber")}</li>
          <li>-{t("privacyPolicy.comment")}</li>
        </ul>
        <p>{t("privacyPolicy.dataUseDescription")}</p>
      </div>

      <div className={s.policyList}>
        <h2 className={s.policyListTitle}>
          2.{t("privacyPolicy.dataProcessingTitle")}
        </h2>
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
      </div>

      <div className={s.policyList}>
        <h2 className={s.policyListTitle}>
          3.{t("privacyPolicy.dataUsageTitle")}
        </h2>
        <p>{t("privacyPolicy.dataUsageDescription")}</p>
      </div>

      <div className={s.policyList}>
        <h2 className={s.policyListTitle}>
          4.{t("privacyPolicy.dataSecurityTitle")}
        </h2>
        <p>{t("privacyPolicy.dataSecurityDescription")}</p>
      </div>

      <div className={s.policyList}>
        <h2 className={s.policyListTitle}>
          5.{t("privacyPolicy.dataConsentTitle")}
        </h2>
        <p>{t("privacyPolicy.dataConsentDescription")}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
