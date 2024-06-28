import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import LocksmithGallery from './components/LocksmithGallery';
import './styles/globals.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LocksmithGallery />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Home;
