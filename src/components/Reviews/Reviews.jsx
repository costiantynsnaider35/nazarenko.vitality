import s from "./Reviews.module.css";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const images = [...Array(34)].map((_, index) => `/ot${index + 1}.jpg`);

const Reviews = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGrid, setIsGrid] = useState(window.innerWidth >= 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsGrid(window.innerWidth >= 1440);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={s.reviews}>
      <h1 className={s.reviewsTitle}>{t("reviews.title")}</h1>

      {isGrid ? (
        <div className={s.imagesContainer}>
          {images.map((img, index) => (
            <div className={s.reviewsCard} key={index}>
              <img
                src={img}
                alt={t("reviews.reviewsImageAlt", { number: index + 1 })}
                className={s.reviewsImg}
              />
            </div>
          ))}
        </div>
      ) : (
        // Карусель
        <div className={s.carouselContainer}>
          <button
            className={`${s.carouselButton} ${s.leftButton}`}
            onClick={handlePrev}
          >
            ❮
          </button>
          <div className={s.reviewsCard}>
            <img
              src={images[currentIndex]}
              alt={t("reviews.reviewsImageAlt", { number: currentIndex + 1 })}
              className={s.reviewsImg}
            />
          </div>
          <button
            className={`${s.carouselButton} ${s.rightButton}`}
            onClick={handleNext}
          >
            ❯
          </button>
        </div>
      )}
    </div>
  );
};

export default Reviews;
