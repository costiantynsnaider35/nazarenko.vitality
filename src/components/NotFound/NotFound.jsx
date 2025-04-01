import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import s from "./NotFound.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.notFound}>
      <motion.h1
        className={s.notFoundTitle}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.p
        className={s.notFoundText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Упс! Страница не найдена.
      </motion.p>
      <Link to="/" className={s.notFoundBtn}>
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFoundPage;
