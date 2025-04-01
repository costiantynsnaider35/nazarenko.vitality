import s from "./ForWhom.module.css";
import { Fa1, Fa2, Fa3, Fa4, Fa5, Fa6 } from "react-icons/fa6";

const ForWhom = () => {
  return (
    <div className={s.whom}>
      <ul className={s.whomList}>
        <h1 className={s.whomTitle}>Мои услуги будут полезны и помогут:</h1>
        <li className={s.whomItem}>
          <Fa1 className={s.whomIcon} />
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
        </li>
        <li className={s.whomItem}>
          <Fa2 className={s.whomIcon} />
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
        </li>
        <li className={s.whomItem}>
          <Fa3 className={s.whomIcon} />
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
        </li>
        <li className={s.whomItem}>
          <Fa4 className={s.whomIcon} />
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
        </li>
        <li className={s.whomItem}>
          <Fa5 className={s.whomIcon} />
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
        </li>
        <li className={s.whomItem}>
          <Fa6 className={s.whomIcon} />
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
        </li>
      </ul>
      <img src="/whoimg.jpg" alt="fotor img" />
    </div>
  );
};
export default ForWhom;
