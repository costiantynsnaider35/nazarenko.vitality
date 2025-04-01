import { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader.jsx";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector.jsx";
import { useTranslation } from "react-i18next";
import "./i18n.js";

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

  useEffect(() => {
    if (!localStorage.getItem("language")) {
      setShowLanguageSelector(true);
    }
  }, []);

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

      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/forwhom" element={<ForWhomPage />} />
          <Route path="/usefulinfo" element={<UsefulInfoPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
