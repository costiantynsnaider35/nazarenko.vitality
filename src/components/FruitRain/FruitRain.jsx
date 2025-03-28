import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const fruits = ["🍎", "🍌", "🍉", "🍒", "🍇", "🥕", "🌽", "🍓", "🥭", "🍍"];

const FruitRain = () => {
  const [items, setItems] = useState([]);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    if (!showAnimation) return;

    const interval = setInterval(() => {
      setItems((prev) => [
        ...prev,
        {
          id: Math.random(),
          emoji: fruits[Math.floor(Math.random() * fruits.length)],
          left: Math.random() * 100,
        },
      ]);
    }, 100); // Появление новых фруктов

    // Остановить анимацию через 5 секунд
    setTimeout(() => setShowAnimation(false), 3000);

    return () => clearInterval(interval);
  }, [showAnimation]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ y: -50, opacity: 1 }}
          animate={{
            y: "100vh", // Фрукты двигаются до низа экрана
            opacity: showAnimation ? 1 : 0, // Плавное исчезновение через 5 секунд
          }}
          transition={{
            duration: 4, // Длительность анимации движения
            ease: "easeInOut", // Плавное начало и конец анимации
          }}
          style={{
            position: "absolute",
            left: `${item.left}%`,
            fontSize: "2rem",
            zIndex: 10,
          }}
        >
          {item.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FruitRain;
