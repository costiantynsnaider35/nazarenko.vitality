import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { PiHamburger } from "react-icons/pi";
import s from "./Header.module.css";

const buildLinkClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Функция для закрытия меню
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={s.header}>
      <a className={s.logo} href="/home">
        <img src="/2.jpg" alt="Nazarenko Vitality Logo" />
      </a>

      <div className={clsx(s.navigation, menuOpen && s.open)}>
        <NavLink to="/about" className={buildLinkClass} onClick={closeMenu}>
          <span>Обо мне</span>
        </NavLink>
        <NavLink to="/forwhom" className={buildLinkClass} onClick={closeMenu}>
          <span>Для кого</span>
        </NavLink>
        <NavLink
          to="/usefulinfo"
          className={buildLinkClass}
          onClick={closeMenu}
        >
          <span>Полезная информация</span>
        </NavLink>
        <NavLink to="/services" className={buildLinkClass} onClick={closeMenu}>
          <span>Услуги</span>
        </NavLink>
        <NavLink to="/reviews" className={buildLinkClass} onClick={closeMenu}>
          <span>Отзывы</span>
        </NavLink>
      </div>
      <div className={s.contactsList}>
        <a
          className={s.contactsIcon}
          href="https://www.instagram.com/nataliy_nazarenko/?igsh=NXQ2Y213aGcyaDF0#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon=instagram.svg" alt="Instagram" className={s.icon} />
        </a>
        <a
          className={s.contactsIcon}
          href="viber://chat?number=+380 97 843 88 08"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon=viber.svg" alt="Viber" className={s.icon} />
        </a>
        <a
          className={s.contactsIcon}
          href="https://www.facebook.com/share/1A2tunsN4j/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon=facebook.svg" alt="Facebook" className={s.icon} />
        </a>
        <a
          className={s.contactsIcon}
          href="https://t.me/Nataliy_Nazarenko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon=telegram.svg" alt="Telegram" className={s.icon} />
        </a>
      </div>
      <button
        className={clsx(s.menuButton, menuOpen && s.open)}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <PiHamburger />
      </button>
    </div>
  );
};

export default Header;
