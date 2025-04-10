import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import s from "./Modal.module.css";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "+380",
    comment: "",
    consent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const isAlreadySubmitted = localStorage.getItem("formSubmitted");
    if (isAlreadySubmitted === "true") {
      setIsSubmitted(true);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConsentChange = (e) => {
    setFormData({ ...formData, consent: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      toast.error(t("modal.consentError"));
      return;
    }

    if (isSubmitted) return;

    const currentDate = new Date();
    const dateString = currentDate.toLocaleString();

    const message = `
    Новая запись на консультацию:
    Имя: ${formData.fullName}
    Телефон: ${formData.phone}
    Комментарий: ${formData.comment}
    Время отправки: ${dateString}
    `;

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const payload = {
      chat_id: chatId,
      text: message,
    };

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      localStorage.setItem("formSubmitted", "true");

      setIsSubmitted(true);
      setFormData({
        fullName: "",
        phone: "+380",
        comment: "",
        consent: false,
      });
      toast.success(t("modal.success"));
      onClose();
    } catch {
      toast.error(t("modal.error"));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={s.modalOverlay}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={s.modalContent}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <button className={s.closeButton} onClick={onClose}>
              ×
            </button>
            <h2 className={s.modalTitle}>{t("modal.title")}</h2>
            <p className={s.modalItem}>{t("modal.description")}</p>
            <form className={s.modalForm} onSubmit={handleSubmit}>
              <div className={s.formGroup}>
                <label htmlFor="fullName">{t("modal.fullName")}</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className={s.modalInput}
                  disabled={isSubmitted}
                />
              </div>
              <div className={s.formGroup}>
                <label htmlFor="phone">{t("modal.phone")}</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={s.modalInput}
                  disabled={isSubmitted}
                />
              </div>
              <div className={s.formGroup}>
                <label htmlFor="comment">{t("modal.comment")}</label>
                <textarea
                  name="comment"
                  id="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows="2"
                  className={s.modalInput}
                  disabled={isSubmitted}
                />
              </div>
              <div className={s.formGroupPolicy}>
                <label>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleConsentChange}
                    required
                  />
                  <span>
                    {t("modal.consent")}
                    <a href="/privacy-policy" target="_blank">
                      {t("modal.privacyPolicyLinkText")}
                    </a>
                  </span>
                </label>
              </div>

              <button
                className={s.modalBtn}
                type="submit"
                disabled={isSubmitted}
              >
                <span>
                  {isSubmitted
                    ? t("modal.alreadySubmitted")
                    : t("modal.submit")}
                </span>
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
