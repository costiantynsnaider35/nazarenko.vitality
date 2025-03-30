import FruitRain from "../FruitRain/FruitRain.jsx";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.home}>
      <FruitRain />
      <div className={s.homeTitle}>
        <h1>Назаренко Наталия</h1>
        <h2>Нутрициолог и healthi coach</h2>
        <h3>Жизнь хороша, когда жуешь не спеша! &#128522;</h3>
      </div>
      <div>
        <img src="/home.jpg" alt="Home img" className={s.homeImg} />
      </div>
    </div>
  );
};
export default Home;
