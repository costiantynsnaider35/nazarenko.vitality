import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader.jsx";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector.jsx";
import { useTranslation } from "react-i18next";
import "./i18n.js";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";

const Header = lazy(() => import("./components/Header/Header.jsx"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const AboutMePage = lazy(() => import("./pages/AboutMePage/AboutMePage.jsx"));
const ForWhomPage = lazy(() => import("./pages/ForWhomPage/ForWhomPage.jsx"));
const UsefulInfoPage = lazy(() =>
  import("./pages/UsefulInfoPage/UsefulInfoPage.jsx")
);
const ServicesPage = lazy(() =>
  import("./pages/ServicesPage/ServicesPage.jsx")
);
const ReviewsPage = lazy(() => import("./pages/ReviewsPage/ReviewsPage.jsx"));
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);

const App = () => {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const storedLang = localStorage.getItem("language") || "ru";
    i18n.changeLanguage(storedLang);
  }, [i18n]);

  const handleLanguageSelect = (lang) => {
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
    setShowLanguageSelector(false);
  };

  return (
    <div className="app">
      <Toaster position="top-center" />
      {showLanguageSelector && (
        <LanguageSelector onSelect={handleLanguageSelect} />
      )}
      <Header />
      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.key}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutMePage />} />
              <Route path="/forwhom" element={<ForWhomPage />} />
              <Route path="/usefulinfo" element={<UsefulInfoPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </Suspense>
    </div>
  );
};

export default App;
