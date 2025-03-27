import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Header = lazy(() => import("./components/Header/Header.jsx"));
const Loader = lazy(() => import("./components/Loader/Loader.jsx"));

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

const App = () => {
  return (
    <div className="app">
      <Toaster position="top-center" />
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/forwhom" element={<ForWhomPage />} />
          <Route path="/usefulinfo" element={<UsefulInfoPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
