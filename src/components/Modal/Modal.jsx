import { useEffect, useState } from "react";
import s from "./Modal.module.css";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion"; // Импортируем AnimatePresence

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "+380", // Устанавливаем начальное значение для телефона
    comment: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const isAlreadySubmitted = localStorage.getItem("formSubmitted");
    if (isAlreadySubmitted === "true") {
      setIsSubmitted(true); // Если форма уже была отправлена, блокируем возможность отправки
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    const botToken = "7893371510:AAHhfkROg7T_KdaRzLAvO0V1lpDQwA05SsM";
    const chatId = "370137018";

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
        phone: "+380", // Сбрасываем поле телефона
        comment: "",
      });
      toast.success("Вы успешно записались на бесплатную консультацию!");
      onClose();
    } catch {
      toast.error(
        "Извините, произошла ошибка при записи на бесплатную консультацию! Попробуйте, пожалуйста, еще раз!"
      );
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
            <h2 className={s.modalTitle}>Запись на бесплатную консультацию</h2>
            <p className={s.modalItem}>
              Первая бесплатная консультация длится 15-30 минут. Оставьте свои
              данные, и я обязательно Вам перезвоню!
            </p>
            <form className={s.modalForm} onSubmit={handleSubmit}>
              <div className={s.formGroup}>
                <label htmlFor="fullName">Имя и фамилия</label>
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
                <label htmlFor="phone">Телефон</label>
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
                <label htmlFor="comment">Комментарий</label>
                <textarea
                  name="comment"
                  id="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows="4"
                  className={s.modalInput}
                  disabled={isSubmitted}
                />
              </div>
              <button
                className={s.modalBtn}
                type="submit"
                disabled={isSubmitted}
              >
                <span>{isSubmitted ? "Вы уже записались" : "Записаться"}</span>
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
