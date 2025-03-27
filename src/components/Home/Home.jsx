import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.home}>
      <div className={s.homeTitle}>
        <h1>Назаренко Наталия</h1>
        <h2>Нутрициолог и health coach</h2>
        <h3>Жизнь хороша, когда жуешь не спеша! &#128522;</h3>
      </div>
      <div>
        <img src="/hero.jpg" alt="Home img" className={s.homeImg} />
      </div>
    </div>
  );
};
export default Home;
