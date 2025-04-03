import { useState } from "react";
import { useTranslation } from "react-i18next";
import s from "./About.module.css";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={s.about}>
      <div className={s.aboutContainer}>
        <img
          src="/about.jpg"
          alt={t("about.aboutImageAlt")}
          className={s.aboutImg}
        />
        <h1 className={s.aboutTitle}>{t("about.aboutText")}</h1>
      </div>

      <div className={s.aboutContainer2}>
        <div>
          <h1 className={s.aboutReviews}>{t("about.clientReviewsTitle")}</h1>
          <ul className={s.aboutReviewsList}>
            {[...Array(8)].map((_, index) => (
              <li key={index}>
                <img
                  src={`/rew${index + 1}.jpg`}
                  alt={t("about.reviewImageAlt", { number: index + 1 })}
                  className={s.aboutReviewsItem}
                  onClick={() => openModal(`/rew${index + 1}.jpg`)}
                />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className={s.aboutSert}>{t("about.achievementsTitle")}</h1>
          <ul className={s.aboutSertGaleryList}>
            {[...Array(6)].map((_, index) => (
              <li key={index}>
                <img
                  src={`/ser${index + 1}.jpg`}
                  alt={t("about.achievementImageAlt", { number: index + 1 })}
                  className={s.aboutSertGaleryItem}
                  onClick={() => openModal(`/ser${index + 1}.jpg`)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={s.modal}
            onClick={closeModal}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.5,
            }}
          >
            <motion.div
              className={s.modalContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                duration: 0.5,
              }}
            >
              <img
                src={selectedImage}
                alt="Selected"
                className={s.modalImage}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
