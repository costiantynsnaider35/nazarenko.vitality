import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { PiHamburger } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import s from "./Header.module.css";
import Modal from "../Modal/Modal.jsx";

const buildLinkClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") || "ru";
    i18n.changeLanguage(storedLang);
  }, [i18n]);

  const closeMenu = () => setMenuOpen(false);

  const changeLanguage = (event) => {
    const newLang = event.target.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <div className={s.header}>
      <a className={s.logo} href="/">
        <img src="/2.jpg" alt={t("header.logoAlt")} />
      </a>

      <div className={clsx(s.navigation, menuOpen && s.open)}>
        <NavLink to="/about" className={buildLinkClass} onClick={closeMenu}>
          <span>{t("header.about")}</span>
        </NavLink>
        <NavLink to="/forwhom" className={buildLinkClass} onClick={closeMenu}>
          <span>{t("header.forWhom")}</span>
        </NavLink>
        <NavLink
          to="/usefulinfo"
          className={buildLinkClass}
          onClick={closeMenu}
        >
          <span>{t("header.usefulInfo")}</span>
        </NavLink>
        <NavLink to="/services" className={buildLinkClass} onClick={closeMenu}>
          <span>{t("header.services")}</span>
        </NavLink>
        <NavLink to="/reviews" className={buildLinkClass} onClick={closeMenu}>
          <span>{t("header.reviews")}</span>
        </NavLink>
        <button
          className={s.consultationButton}
          onClick={() => setModalOpen(true)}
        >
          <span>{t("header.consultation")}</span>
        </button>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>

      <div className={s.contactsList}>
        <a
          href="https://www.instagram.com/nataliy_nazarenko/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icon=instagram.svg"
            alt={t("header.instagramAlt")}
            className={s.icon}
          />
        </a>
        <a
          href="viber://chat?number=+380978438808"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icon=viber.svg"
            alt={t("header.viberAlt")}
            className={s.icon}
          />
        </a>
        <a
          href="https://www.facebook.com/share/1A2tunsN4j/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icon=facebook.svg"
            alt={t("header.facebookAlt")}
            className={s.icon}
          />
        </a>
        <a
          href="https://t.me/Nataliy_Nazarenko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icon=telegram.svg"
            alt={t("header.telegramAlt")}
            className={s.icon}
          />
        </a>
        <select
          className={s.languageSelect}
          value={i18n.language}
          onChange={changeLanguage}
        >
          <option value="ru">RU</option>
          <option value="ua">UA</option>
          <option value="en">EN</option>
        </select>
      </div>

      <button
        className={clsx(s.menuButton, menuOpen && s.open)}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <PiHamburger className={s.iconMenu} />
      </button>
    </div>
  );
};

export default Header;
