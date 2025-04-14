import { useState, useEffect } from "react";
import s from "./CookieConsent.module.css";
import { useTranslation } from "react-i18next";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={s.cookieConsent}>
      <p>
        {t("cookieConsent.text")}
        <a href="/privacy-policy" target="_blank">
          {t("cookieConsent.privacyPolicy")}
        </a>
        .
      </p>
      <button onClick={handleAcceptCookies}>{t("cookieConsent.accept")}</button>
    </div>
  );
};

export default CookieConsent;
