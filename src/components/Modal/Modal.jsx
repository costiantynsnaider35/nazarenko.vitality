import { useEffect, useState } from "react";
import s from "./Modal.module.css";
import toast from "react-hot-toast";

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
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
        phone: "",
        comment: "",
      });
      toast.success("Вы успешно записались на бесплатную консультацию!");
      onClose();
    } catch {
      toast.error(
        "Извените,произошла ошибка при записи на бесплатную консультацию!Попробуйте,пожалуйста,еще раз!"
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className={s.modalOverlay} onClick={onClose}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeButton} onClick={onClose}>
          ×
        </button>
        <h2 className={s.modalTitle}>Запись на бесплатную консультацию</h2>
        <p className={s.modalItem}>
          Первая бесплатная консультация длится 15-30 минут. Оставьте свои
          данные, и я обязательно Вам перезвоню!
        </p>
        <form className={s.modalForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Имя и фамилия"
            value={formData.fullName}
            onChange={handleChange}
            required
            className={s.modalInput}
            disabled={isSubmitted} // Блокируем поля, если форма отправлена
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleChange}
            required
            className={s.modalInput}
            disabled={isSubmitted} // Блокируем поля, если форма отправлена
          />
          <textarea
            name="comment"
            placeholder="Комментарий"
            value={formData.comment}
            onChange={handleChange}
            rows="4"
            className={s.modalInput}
            disabled={isSubmitted} // Блокируем поля, если форма отправлена
          />
          <button className={s.modalBtn} type="submit" disabled={isSubmitted}>
            <span>{isSubmitted ? "Вы уже записались" : "Записаться"}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
