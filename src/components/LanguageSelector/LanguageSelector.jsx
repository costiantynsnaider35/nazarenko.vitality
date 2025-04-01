import s from "./LanguageSelector.module.css";

const LanguageSelector = ({ onSelect }) => {
  return (
    <div className={s.language}>
      <h2>Выберите язык</h2>
      <button onClick={() => onSelect("ru")}>Русский</button>
      <button onClick={() => onSelect("en")}>English</button>
      <button onClick={() => onSelect("ua")}>Українська</button>
    </div>
  );
};

export default LanguageSelector;
