import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './pages/About';
import WhySection from './components/WhySection';
import Staff from './components/Staff';
import Footer from './components/Footer';
import Admissions from './pages/Admissions';
import Results from './pages/Results';
import Login from './pages/Login';
import ContactFaith from './pages/ContactFaith';
import AboutFaith from './pages/AboutFaith';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <About />
              <WhySection />
              <Staff />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/AboutFaith" element={<AboutFaith />} />
        <Route path="/admission" element={<Admissions />} />
        <Route path="/results" element={<Results />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ContactFaith" element={<ContactFaith />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
